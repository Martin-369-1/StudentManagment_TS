import mongoose from "mongoose";

const connectMongo=()=>{
  mongoose.connect(process.env.MONGO_URI || "")
    .then(()=>{
      console.log('mongodb connected');
    }).catch((err)=>{
      console.log(err);
    })
}

export default connectMongo;