import  { Request, Response} from 'express'

 
class RoutesController{
    public route (_req: Request, res: Response){
        res.send('Fetching all songs')
    }
}

export const routesController = new RoutesController()