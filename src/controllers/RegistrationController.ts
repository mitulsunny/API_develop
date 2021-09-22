import {Request, Response, NextFunction} from "express";
import log from '../loggers';

class RegistrationController{
    public async getUserInfo(req: Request, res: Response, next: NextFunction){
        let appIdentifier=req.header('appIdentifier');
        let appParameter = req.query.marketing;
     res.json({'name':'Md Obaidulla','appHeader':appIdentifier,'appParameter':appParameter});
    }

    public async registration(req: Request, res: Response, next: NextFunction){

     res.json({"user":"working"});
    }
}
export default new RegistrationController();