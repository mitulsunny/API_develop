import mongoose from "mongoose";
import config from "config";
import log from "../loggers";
mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)

async function connect(){
    const dbUri = config.get("dbUri") as string;
    return mongoose
    .connect(dbUri)
    .then(()=>{
        log.info("mongodb is connected");
    })
    .catch((error)=>{
        log.error("db error",error);
        process.exit(1);
    });
}
export default connect;