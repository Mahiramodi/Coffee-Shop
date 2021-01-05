const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/coffeeshop", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connected successfully");
}).catch((err) => {
    console.log(err);
})