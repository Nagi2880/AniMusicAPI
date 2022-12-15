import express from 'express'
import { routesController } from '../controllers/routesController'
const router = express.Router()

router.get('/songs',routesController.route)

//route for add a song to the website list
router.post('/songs',(_req,res)=>{
    res.send('Adding song to the list')
})



export default router