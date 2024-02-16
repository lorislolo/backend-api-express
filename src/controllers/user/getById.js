const getById = (req, res) => {
    const id = req.params.id
    res.json({message: 'Esta é a rota de GET pelo ID /user/' + id})
}

export default getById 