// require('dotenv').config({path:'./env'}) //this is also a method to add dotenv 

import dotenv from "dotenv"; // but we are using this one
import connectDB from "./db/index.js";
import app from "./app.js";





dotenv.config();


connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=> {
        console.log(`servr is runnning on port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err);
})
























// approch #1 
// i this approce of connecting the database we put all the code  inside the index folder 
// detailed explanation in notes 
// **************************************************************************************
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
// import express from "express"
// const app = express()
// (async()=>{
//     try{
//         await mongoose.connect('${process.env.MOGNGODB_URI}/$(DB_NAME)')

//         app.on("error",(error)=>{
//         console.log("ERROR :",error);
//         throw error
//         })

//         app.listen(process.env.pORT,()=>{
//             console.log('app is listning on port ${process.env.PORT}');
//         })
//     }catch(error){
//         console.error("ERROR",error)
//         throw err
//     }
// })()
//****************************************************************************** */