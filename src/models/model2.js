const mongoose = require("mongoose");

const tCoffe = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    like: {
        type: Number
    }
});

const Coffee = new mongoose.model("Coffee", tCoffe);

module.exports = Coffee;