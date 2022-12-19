import  { Request, Response} from 'express'
import { SongModel, Song} from '../database/models/songSchema'
 
class RoutesController{
    public async fetchSongs (_req: Request, res: Response){
        const Songs: Song[] = await SongModel.find();
        return res.json(Songs)
    }

    public async saveSong(req: Request, res:Response){
        const {anime_name, song_name,singer,duration}=req.body;
       const song = new SongModel({anime_name, song_name,singer,duration})
        await song.save();
        console.log(req.body)
        //res.redirect(`./api/${anime_name}/${song_name}`)
        res.send('Song received')
        
    }
}

export const routesController = new RoutesController()

