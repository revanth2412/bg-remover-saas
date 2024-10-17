import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'


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

app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.listen(port,()=>{
    console.log('server is running on port '+ port);
    
})