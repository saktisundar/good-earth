const mongoose = require("mongoose");

//creating database
mongoose.connect("mongodb+srv://FinalProject:FinalProject@cluster0.263xq.mongodb.net/GoodEarthSchool?authSource=admin&replicaSet=atlas-lfsju4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true" , {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})
