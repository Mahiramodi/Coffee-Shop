const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const user = require("./models/model1");
const Coffee = require("./models/model2");


const viewPath = path.join(__dirname, "../views");
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));
require("./db/conn");
app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.json());
app.use(urlencoded({ extended: false }));



app.get("/", (req, res) => {
    res.render("signin");
})
app.get("/signin", (req, res) => {
    res.render("signin");
});
app.get("/signup", (req, res) => {
    res.render("signup");
})
app.get("/index", (req, res) => {
    res.render("index");
})

app.post("/signup", async(req, res) => {
    try {

        const newuser = new user({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword
        });
        if (req.body.cpassword == req.body.password) {
            var save = await newuser.save();
            console.log(save);
            res.render("signin");
        }
    } catch (err) {
        console.log(err);
    }

})


app.post("/signin", async(req, res) => {
    try {
        var name = (req.body.name);
        var password = (req.body.password);
        var finduser = await user.findOne({ name: name });
        // res.send(finduser)
        if (password == finduser.password) {
            console.log("login success");
            res.render("index");
        } else {
            alert("retry");
        }
    } catch (err) {
        console.log(err);
    }

})
const createDoc = async(req, res) => {
    try {
        const userReg = new user({
            name: "Mahira",
            email: "test2@test.com",
            password: 123,
            cpassword: 123,

        });
        const types = new Coffee({
            name: "Expresso1",
        })

        const savet = await types.save();
        console.log(types);
        console.log(userReg);

        const saved = await userReg.save();
    } catch (err) {
        // res.status(404);
        console.log(err);
    }

};
// createDoc();
app.listen(port, (err) => {
    console.log(`connct to ${port}`);
})