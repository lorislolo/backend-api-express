import userModel from '../../models/userModel.js'

const create = async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const avatar = req.body.avatar
    const data = {name, email, avatar}
    
    const user = await userModel.create({data})
    res.json({message: 'Usuário cadastrado com sucesso.', user})
}
 export default create