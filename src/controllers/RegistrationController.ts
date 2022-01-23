import {Request, Response, NextFunction} from "express";
import log from '../loggers';
import {Students} from "../models/registrationFormSchema";

class RegistrationController{
    public async getUserInfo(req: Request, res: Response, next: NextFunction){
    //     let appIdentifier=req.header('appIdentifier');
    //     let appParameter = req.query.marketing;
    //   res.json({'name':'Md Obaidulla','appHeader':appIdentifier,'appParameter':appParameter});
    const allStudents=await Students.find({});    
    res.status(200).json(allStudents);
}
    
    public async registration(req: Request, res: Response, next: NextFunction){
        Students.create(req.body, (err,createdUser)=>{
            if(err){
                console.log("err:",err)
                next();
            }else{
                log.info("One user have been created!!")
            res.status(201).json({"message":"New user hase been added"});
            }
        });
     
    }
}
export default new RegistrationController();