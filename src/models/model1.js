const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }

});



const userRegistration = new mongoose.model("register", user);


module.exports = userRegistration;