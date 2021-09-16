import {Request, Response, NextFunction} from "express";
import log from '../loggers';
class RegistrationController{
    public async getUserInfo(req: Request, res: Response, next: NextFunction){
        log.info("Getting call rerigtaiotn method");
     res.json({'name':'Md Obaidulla'});
    }
    public async registration(req: Request, res: Response, next: NextFunction){
     res.json(req.body);
    }

}
export default new RegistrationController();