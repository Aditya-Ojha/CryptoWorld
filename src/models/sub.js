const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
    email: { type: String, required: true }
})

const Subscribe = new mongoose.model("Subscriber", subSchema);
module.exports = Subscribe;
