# Iniciando nas rotas do backend
### Criar uma nova pasta chamada routes
### - Dentro de routes, criar o arquivo userRouter.js

#### Para criar uma conexão com o express para criar as rotas
```
import express from express

const router = express.Router()
```
#### Para criar as rotas de GET e GET by ID no arquivo userRouter.js
```
router.get('/', (req, res) => {
    res.json({message: 'Esta é a rota de GET para retornar um usuário'})
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota de GET pelo ID /user/' + id})
})
```

##### Caso queira outras rotas como PUT, basta mudar o método do get para a que deseja assim como no código acima

#### Para exportar este arquivo, no fim de seu código:
```
export default router
```

### No arquivo server.js dentro da pasta src:
#### Para importar a rota que acabamos de criar para "usuário" no começo do arquivo:
```
import userRouter from '../routes/userRouter.js'
```

#### No fim do código para nossa api utilizar nossa nova rota:
```
app.use('/user', userRouter) 
```

### Para que nos retorne os dados que enviamos no Body em formato json, adicione no arquivo server.js.
```
app.use(express.json())
```

### Exemplo de como você deve pedir a resposta no Thunder Client (repare no res.json)
```
router.post('/', (req, res) => {
    res.json(req.body)
})
```

### Começando a configurar um Middleware
#### Crie uma pasta chamada middleware
#### Dentro da pasta middleware crie o arquivo logger.js

### No arquivo logger.js iremos criar uma const para testarmos, podemos utilizar o middleware para definir funções específicas em nossas rotas.

```
const logger = (req, res, next) => {
    console.log('Olá, passei pelo logger')
    next()
}
```

### Para exportar nosso logger, adicione ao final do arquivo logger.js
```
export default logger
```

#### No arquivo server.js que esta na pasta src adicione a importação do nosso middleware (logger), será adicionado junto das outras importações
```
import logger from '../middleware/logger.js'
```

### Antes das rotas adicione o código a seguir para que possamos usar o middleware em nossa api
```
app.use(logger)
```

##### Em nosso logger, podemos adicionar no console.log algumas funções concatenadas, neste exemplo podemos ver o metodo que foi usado e a url que foi usada na barra de pesquisa:
```
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`)
    next()
}
```

# Começando a organizar!

### Agora iremos criar nossas pastinhas dos deuses, crie uma pasta dentro de src chamda controllers, esta pasta servirá para ser literalmente nossa controle, vamos usá-la para separa nosso CRUD (listar, listar pelo id, editar, criar e deletar).

#### Dentro de controllers, crie uma pasta de exemplo chamada user, ela será um exemplo de tabela do banco de dados.

#### Dentro da pasta user, crie um arquivo chamado listAll.js, este será nosso controle do metodo GET, lembra que dentro de userRouter.js nós definimos a função de router.get ..., dentro de listAll.js apenas recorte a função do userRouter.js e cole em listAll.js, após isso faça a exportação, ficará assim:
```
const listAll = (req, res) => {
    res.json(req.body)
}

export default listAll
```

#### No arquivo userRouter.js não esqueça de fazer a IMPORTAÇÃO 
```
import listAll from '../controllers/user/listAll.js'
```

#### Não se esqueça de mudar a rota do get no userRouter.js, precisamos chamar a constante que criamos no listAll. Para fazer os outros CRUD, é o mesmo processo.
```
router.get('/', listAll)
```