//install @types/express or you will have an error
import express from 'express'

//importing routes
import songsRoutes from './routes/Routes'

//NPM RUN DEV TO START //////

//Initializations
const app = express()
import './database/database'

//Settings
const PORT = 3000 // declare PORT for the localhost
app.set('port', process.env.PORT ||PORT)

//Middlewares
app.use(express.json()) // middleware to transform req.body into a json
app.use(express.urlencoded({extended: false}))

//Database
import Song from './database/models/songSchema'
new Song({
    
})
//Routes
app.get('/ping', (_req,res) =>{
    //To soluce the NoUnusualParameters: true use "_" behind of req 
    console.log('someone ping here!!!')
    res.send('pong')
})

app.use('/api', songsRoutes)

//Starting server
app.listen(app.get('port'), () =>{
    console.log(`Server running on port ${app.get('port')}`);
})