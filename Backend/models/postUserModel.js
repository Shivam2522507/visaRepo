const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    email:{
        required: true,
        type: String,
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid Email"]
    },
    fbName:{
        type: String,
        required: true,
        default: " ",
    },
    password:{
        required: false,
        type: String,
        // minLength:[8,"Password should be 8 character or greater than 8"]
    },
    date:{
        required: true,
        type: String,
        default:Date.now()
    },
    plateform:{
        required:false,
        type: String,
        default:"WebSite"
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }

    this.password = await bcrypt.hash(this.password,10);
});

//JWT TOKEN
userSchema.methods.getJWTToken = function (){
    // return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    //     expiresIn: process.env.JWT_EXPIRE,
    // });
    return jwt.sign({id:this._id},"jwt-secret-key",{
        expiresIn: '1d',
    });
};

// Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function(){

    // Generating token
    const resetToken = crypto.randomBytes(20).toString("hex");

    //Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15*60*1000;

    return resetToken;
}

module.exports = mongoose.model("User",userSchema);