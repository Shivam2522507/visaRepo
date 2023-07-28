const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const adminSchema = new mongoose.Schema({
    email:{
        required: true,
        type: String,
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid Email"]
    },
    password:{
        required: true,
        type: String,
        minLength:[8,"Password should be 8 character or greater than 8"]
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

adminSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password,10);
});

//JWT TOKEN
adminSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id},"jwt-secret-key",{
        expiresIn: '1d',
    });
};

// Compare Password
adminSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


// Generating Password Reset Token
adminSchema.methods.getResetPasswordToken = function(){

    // Generating token
    const resetToken = crypto.randomBytes(20).toString("hex");

    //Hashing and adding resetPasswordToken to adminSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15*60*1000;

    return resetToken;
}



module.exports = mongoose.model("Admin",adminSchema);