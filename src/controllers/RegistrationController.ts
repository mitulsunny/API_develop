import {Request, Response, NextFunction} from "express";
import log from '../loggers';
class RegistrationController{
    public async getUserInfo(req: Request, res: Response, next: NextFunction){
        log.info("Getting call rerigtaiotn method");
     res.send("{'name':'Md Obaidulla'}");
    }

}
export default new RegistrationController();