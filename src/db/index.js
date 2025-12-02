
// approch 2 create a saprate db connection file and connect db here and then export it into the src/index.js 


import mongoose from "mongoose";
import{DB_NAME} from "../constants.js";


const connectDB = async()=>{
    try{
     const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    }catch(error){ 
        console.log("Mongoose connection Failed",error);
        process.exit(1)
    }
}
export default  connectDB;
