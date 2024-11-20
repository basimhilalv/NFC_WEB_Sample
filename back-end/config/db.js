import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://basimhilal25v:BasimNFC123@cluster0.oecli.mongodb.net/NFC_WEB').then(()=>console.log("DB Connected"));
}