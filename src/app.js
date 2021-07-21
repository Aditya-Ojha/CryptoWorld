let signup = "sign";
let userName = "";
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/register");
const SignUp = require("./models/signup");
const Subscribe = require("./models/sub");
// import alert from 'alert'
const port = process.env.PORT || 5000;

// setting the path
const staticpath = path.join(__dirname, "../public");
// const script_path = path.join(__dirname, "../public/js");
const template_path = path.join(__dirname, "../templates/views");
const images_path = path.join(__dirname, "../public/assets");

app.use(express.static(staticpath));
app.set("view engine", "ejs");
app.set("views", template_path);
app.use(express.static(images_path));
// app.use(express.static(script_path));


app.get("/", (req, res) => {
    res.render("index",{name:signup,user:userName});
});

app.get("/index", (req, res) => {
    res.render("index", { name: signup, user: userName});
});

app.get("/services", (req, res) => {
    res.render("services", { name: signup, user: userName });
});

app.get("/contact", (req, res) => {
    res.render("contact", { name: signup, user: userName});
});
app.get("/signup", (req, res) => {
    res.render("signup", { name: signup, user: userName, status: "true"});
});
app.get("/privacy", (req, res) => {
    res.render("privacy", { name: signup, user: userName, status: "true"});
});
app.get("/about", (req, res) => {
    res.render("about", { name: signup, user: userName, status: "true"});
});

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.post("/add", async (req, res) =>{
    try {
        const workerrecord = new Register({

            firstname: req.body.fname,
            lastname: req.body.lname,
            phoneNumber: req.body.phone,
            enteremail: req.body.email,
            subject: req.body.message
        });
        const workerstatus = await workerrecord.save();
        res.status(201).render("index", { name: signup, user: userName});

        
    } catch (error) {
        res.status(400).send(error);
    }
});

// ****SIGNUP********
app.post("/store", async (req, res) =>{
    try {
        const pass = req.body.password;
        const confirmpass = req.body.confirmpass;
        if(pass===confirmpass){

            const userrecord = new SignUp({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                confirmpass: req.body.confirmpass,
            });
            const usersave = await userrecord.save();
            res.status(201).render("signup", { name: signup, user: userName });

        }else{
            console.log("pass not match");
            res.send('Password not matched');
        }

        
    } catch (error) {
        res.status(400).send("Invalid details");
    }
});
// *******LOGIN**********
app.post("/login", async (req, res) =>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await SignUp.findOne({ email: email });
        // console.log(useremail);
        if(useremail!==null&&password===useremail.password){
            console.log("DataFound");
            signup="log"
            userName=useremail.name;
            res.status(201).render("index", { name: signup, user: userName});

        }else{
            console.log("Invalid Data");
            res.send("Invalid Login Details");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});
// *******Subscribe**********
app.post("/subscribe", async (req, res) =>{
    try {

        const subrecord = new Subscribe({
            email: req.body.email,
        });
        const subsave = await subrecord.save();
        res.status(201).render("index", { name: signup, user: userName });

    } catch (error) {
        res.status(400).send("Invalid details");
    }
});

//server
app.listen(port, () =>{console.log(`server is running at port no ${port}`);})

