const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model("Contact",contactSchema);