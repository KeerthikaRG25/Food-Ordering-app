import mongoose from "mongoose";
 export const connectDB = async() => {

    await mongoose.connect('mongodb+srv://project:project1@cluster0.z68mj.mongodb.net/FoodDelivery').then(()=>console.log("DB Connected"));
}