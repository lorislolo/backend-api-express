import userModel from '../../models/userModel.js'

const remove = async (req, res) => { 
    try {
        const id = req.params.id
        const user = await userModel.remove(+id)
    res.json({success: `Sucesso ao excluir o usuário ${id}`, user})
    } catch (error) {
        console.error(error)
        return res.status(500).json({error: 'Erro ao deletar usuário'})
    }
}
export default remove