const mongoose = require("mongoose");

const visaCardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Visa Name"]
    },
    visaType:{
        type:String,
        required:[true,"Please Enter Visa Type"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter Price"]
    }
})

module.exports = mongoose.model("VisaCard",visaCardSchema);
