import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("Conectado com o banco!")
    } catch (err) {
        console.log(err)
    }
})()