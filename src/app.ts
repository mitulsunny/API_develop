import express from "express";
import config from "config";
import log from './loggers';
import connect from "./databases/connect";
import {router} from "./routes/registrstionRouts"

const app = express();
const PORT = config.get("port") as number;
const host = config.get("host") as string;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/users',router);

app.listen(PORT, host, () =>{
log.info(`Server is running at http://${host}:${PORT}`);
connect();
})



