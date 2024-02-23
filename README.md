Inicio do projeto

Para começar nossa projeto usando Node.js e criar o arquivo , no terminal digite 
npm init

Para criar o arquivo package-lock.json e a pasta node modules no terminal digite
npm i





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



para conectar o banco de dados com o backend
crie uma pasta chamada models em nosso src, dentro criar um arquivo chamdo userModel.js com o seguinte codigo:

const getAll = () =>{
    return '...'
}

export default {getAll}

dentro de controllers/ listAll.js

import userModel from '../../models/userModel.js'

const listAll = (req, res) => {

    const users = userModel.getAll()
    res.json({
        success: 'Usuários listados com sucesso.',
        users
    })
}

export default listAll


para instalar o prisma
npm i prisma -D

para ver a documentação npx prisma

para criar o schema prisma no terminal digite
npx prisma init
(note que criou a pasta Prisma e o arquivo schema.prisma)


não podemos adicionar ao git o arquivo .env, por receber dados sensiveis, para isso criaremos um arquivo chamado .env-sample com o codigo dentro:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

no schema.prisma iremos atualizar o datasource db para podermos usar nosso mysql, iremos mudar o provider para que fique desta forma:
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}


iremos conectar nosso banco no .env, atualize a url para a url do seu banco, a minha é:
DATABASE_URL="mysql://root:@localhost:3306/api_node"

para conectar o prisma com o mysql no terminal insira 
npx prisma db pull


para instalar o prisma client 
npm i @prisma/client

instalar o prisma generate para usar funçoes baseadas nas tabelas que criamos no banco


agora vamos testar o prisma em nosso userModel.js vamos importar o prisma
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


agora vamos criar a função de listar todos, repare no return
const getAll = () =>{
    return prisma.user.findMany
}

vamos tornar esta função assincrona 
const getAll = async () => {
    return await  prisma.user.findMany
}