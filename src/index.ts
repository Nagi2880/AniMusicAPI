//install @types/express or you will have an error
import express from 'express'

import songsRoutes from './routes/songRoutes'

const app = express()

app.use(express.json()) // middleware to transform req.body into a json

const PORT = 3000 // declare PORT for the localhost

app.get('/ping', (_req,res) =>{
    //To soluce the NoUnusualParameters: true use "_" behind of req 
    console.log('someone ping here!!!')
    res.send('pong')
})

app.use('/api/songs', songsRoutes)

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})