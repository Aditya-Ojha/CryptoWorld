const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    confirmpass:{type:String, required:true},
})

const SignUp = new mongoose.model("UserData", signupSchema);
module.exports = SignUp;
