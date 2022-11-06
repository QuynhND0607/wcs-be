import mongoose, {Schema} from "mongoose";

const CartSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require: true
    },
    image:{
        type: String,
        require: true
    }
},  { timestamps: true })

export default mongoose.model("Cart", CartSchema)