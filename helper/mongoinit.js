import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({path:".env.local"})
const DB = process.env.MONGO_URI
const mongoInit = () => {
    if(mongoose.connections[0].readyState){
        console.log("already Connected")
    }
    mongoose.connect(DB)

    mongoose.connection.on("connection",()=> {

        console.log("connected to mongoose")
    })

    mongoose.connection.on("not connected",(err)=> {

        console.log("not connected to mongoose")
    })
}

export default mongoInit;