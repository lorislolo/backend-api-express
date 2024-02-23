// const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'
import logger from './middlewares/logger.js'


const app = express()

app.use(express.json())
app.use(logger)

app.use('/user', userRouter) 
app.use('/product', productRouter) 

app.get('/', (req, res) => {
  res.json({message: 'Olá'})
})

app.post('/produto', (req,res) =>{
  res.json({message: 'Hello Word POST!'})
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT} `)
})