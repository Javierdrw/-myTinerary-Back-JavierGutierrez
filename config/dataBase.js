import mongoose from "mongoose";

let url = process.env.URL_MONGO;

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("Connected database");
        
    } catch (error) {
        console.log(error);
        
        
    }
}

connect()