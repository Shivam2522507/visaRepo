const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName:{
        required: true,
        type: String
    },
    lastName:{
        required: true,
        type: String
    },
    contact:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    message:{
        required: true,
        type: String
    },
    date:{
        required: true,
        type: String
    }

});


module.exports = mongoose.model("Contact",contactSchema);