// import express from "express";
import config from "config";
import log from './loggers';
import connect from "./databases/connect";
import {router} from "../lib/routes/registrstionRouts"
import * as OpenApiValidator from 'express-openapi-validator'
import express, {Request, Response,NextFunction} from "express";
import path from 'path';
import * as dotenv from 'dotenv';
const app = express();
//onst PORT = config.get("port") as number;
const host = config.get("host") as string;
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/students',router);
app.listen(PORT, () =>{
log.info(`Server is running at http://localhost:${PORT}`);
connect();
})



