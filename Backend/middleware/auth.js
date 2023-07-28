const jwt = require('jsonwebtoken');
const User = require("../models/postUserModel");
const Admin = require("../models/postAdminModel");


exports.isAuthenticatedUser = async(req,res,next) =>{
    try {
        const {token} = req.cookies;
        
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Please Login To access this resource"
            })
        }
        const decodedData = jwt.verify(token, "jwt-secret-key")

        req.user = await User.findById(decodedData.id);

        next();


    } catch (error) {
        res.status(400).send({ success:false,msg:error.message});
    }
};

exports.isAuthenticatedAdmin = async(req,res,next) =>{
    try {
        const {token} = req.cookies;
        
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Please Admin Login To access this resource"
            })
        }
        const decodedData = jwt.verify(token, "jwt-secret-key")

        req.admin = await Admin.findById(decodedData.id);

        next();


    } catch (error) {
        res.status(400).send({ success:false,msg:error.message});
    }
}