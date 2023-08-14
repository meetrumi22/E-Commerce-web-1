import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    }
})

export default mongoose.models.product || mongoose.model("product",productSchema)