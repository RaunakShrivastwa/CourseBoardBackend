import mongoose from "mongoose";

 mongoose.connect('mongodb+srv://deploydata720:EFV8AxcsXrW3dZM2@cluster0.hi7pxnf.mongodb.net/CourseHub');

 const db = mongoose.connection;

 db.on('error',(err)=>{
    return console.log("there is error ",err);
 });

 db.once('open',()=>console.log("DB connected"));

 export default db;
