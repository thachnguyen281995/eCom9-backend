const mongoose = require("mongoose");
require("dotenv").config();
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected Successfully!");
    } catch (err) {
        console.log("Connect Fail");
    }
}
module.exports = connectDB;
