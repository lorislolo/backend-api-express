// const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'

const app = express()


app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/produto', (req,res) =>{
  res.json({message: 'Hello Word POST!'})
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT} `)
})