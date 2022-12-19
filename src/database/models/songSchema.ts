import { getModelForClass, prop } from '@typegoose/typegoose'

class Song {
    @prop()
    public anime_name!: string
    
    @prop()
    song_name!: string
    
    @prop()
    singer!: string

    @prop()
    duration!: string
}
 const SongModel = getModelForClass(Song);
export {SongModel,Song}