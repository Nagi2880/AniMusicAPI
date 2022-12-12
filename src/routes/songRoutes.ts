import express from 'express'

const router = express.Router()

router.get('/',(_req,res) =>{
 res.send('Fetching all songs')
})

//route for add a song to the website list
router.post('/',(_req,res)=>{
    res.send('Adding song to the list')
})

export default router