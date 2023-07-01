const mongoose = require("mongoose");

const roeSchema = new mongoose.Schema({
    roe:{
        type:Number,
        required:[true,"Please Enter ROE"]
    }
})

module.exports = mongoose.model("roe",roeSchema);
