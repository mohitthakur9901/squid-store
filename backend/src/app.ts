import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())



app.get('/', (req, res) => {
    res.send('Hello World!')
})
// import routes
import AuthRoutes from './routes/Auth'

// Routes 

app.use('/api/auth' , AuthRoutes)



export {app}