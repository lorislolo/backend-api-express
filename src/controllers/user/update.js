const update = (req, res) => { 
    const id = req.params.id
    res.json({message: 'Esta é a rota de PUT para alterar um usuário pelo ID /user/' + id})
}

export default update