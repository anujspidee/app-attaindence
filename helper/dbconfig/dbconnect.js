import mongoose from "mongoose";


export async function connectDB(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        const connection = mongoose.connection
        console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);

        connection.on('connected', () => {
            console.log ("Connected to the database successfully")
        })

        connection.on('error', (error) => {
            console.log("mongoose connection error"+ error);
            process.exit(1)
        })   

        
    } catch (error) {
        console.log("Error connecting to the database", error);
        process.exit(1);
    }
}

export default connectDB