import express from 'express'
import { routesController } from '../controllers/songsController'

const router = express.Router()

router.get('/songs',routesController.fetchSongs)

//route for add a song to the website list
router.post('/songs',routesController.saveSong)



export default router