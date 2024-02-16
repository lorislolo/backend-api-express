const remove = (req, res) => { 
    const id = req.params.id
    res.json({message: 'Esta é a rota de DELETE para deletar um usuário pelo ID /user/' + id})
}

export default remove