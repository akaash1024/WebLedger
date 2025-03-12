
const mongoose = require("mongoose")

const URL = process.env.MONGO_URL

const connectDB = async (req, res) => {

    try {
        await mongoose.connect(URL);
        console.log("Connected to database");

    } catch (error) {
        console.error(error)
    }
}


module.exports = connectDB