// const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'

const endereco = {
  rua: 'Rua das Margaridas',
  numero: 123,
  bairro: 'Jardim das Flores',
  cidade: 'Suzano',
  estado: 'SP'
}
const user = { 
  name: 'Lorena',
  idade: 17,
  email: 'lorena.macedo@aluno.ifsp.edu.br',
  cidade: 'Suzano',
  aluno: true,
  end: endereco
}

const app = express()


app.get('/', (req, res) => {
  res.json(user)
})

app.post('/produto', (req,res) =>{
  res.json({message: 'Hello Word POST!'})
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT} `)
})