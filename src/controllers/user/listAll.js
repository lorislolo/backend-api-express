import userModel from '../../models/userModel.js'

const listAll = async (req, res) => {
    try {
        const user = await userModel.listAll()
        return res.json({
            success: 'Usuários listados com sucesso.',
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opps erro no servidor, tente novamente'
        })
    }
}

export default listAll