import mongoose from "mongoose";

async function connectDB(){
    mongoose.set("strictQuery", false);
    const db =  await mongoose.connect('mongodb://127.0.0.1/apisongs')
    console.log(`DB is connected to ${db.connection.name}`)
}
connectDB()