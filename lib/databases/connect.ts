import mongoose from "mongoose";
import config from "config";
import log from "../loggers";


async function connect(){
const db = mongoose.connection
const mongodbURI = process.env.MONGODBURI||"mongodb://localhost:27017/registration"

// DATABASE
const connections= mongoose.connect(
    mongodbURI,
    { 

      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => {
      console.log('the connection with mongod is established at', mongodbURI)
    }
  )
  db.on('error', err => console.log(err.message + ' is mongod not running?'))
  db.on('disconnected', () => console.log('mongo disconnected'))
  return connections;
  // Optional, but likely helpful
// Connection Error/Success
// Define callback functions for various events


    // const dbUri = config.get("dbUri") as string;
    // return mongoose
    // .connect(dbUri)
    // .then(()=>{
    //     log.info("mongodb is connected");
    // })
    // .catch((error)=>{
    //     log.error("db error",error);
    //     process.exit(1);
    // });

}
export default connect;