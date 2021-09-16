
import { Request, Response, NextFunction } from "express";
import auth from "basic-auth";

const basicAuth = (req:Request, res:Response, next:NextFunction)=>{
const userName = process.env.BASIC_AUTH_USERNAME;
const password = process.env.BASIC_AUTH_PASSWORD;
const credential = auth(req);
if(!credential){
    return res.status(401).json({message:"Invalid Autherization Values!!"});
}
if(credential.name!== "test" || credential.pass!=="test"){
    return res.status(401).json({message:"Invalid Authentication Credentials"});
}

return next();
}

export default basicAuth;