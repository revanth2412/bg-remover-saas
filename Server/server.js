import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'


//APP Config

const port = process.env.PORT || 4000

const app= express()

await connectDB()

//Initialize middlewares

app.use(express.json())
app.use(cors())




//API route

app.get('/',(req,res)=>{
    return res.send('api working')
})

app.listen(port,()=>{
    console.log('server is running on port '+ port);
    
})