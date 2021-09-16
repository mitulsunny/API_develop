import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateRegistrationFormSchema = ()=>{
  return [
    check('phoneNumbers.homePhone').exists(),
    check('phoneNumbers.workPhone').exists()
  ];
}
export const validatePayload = async(req: Request, res: Response, next: NextFunction)=>{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            //console.log("within isEmpty block")
            return next();
        }else{
          next(res.status(400).json({messgae:errors.array()[0].msg}));
        }
}