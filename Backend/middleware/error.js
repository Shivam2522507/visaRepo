const ErrorHander = require("../utils/errorhander");

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    //Wrong Mongodb Id Error 
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid: ${err.path}`
        err = new ErrorHander(message,400);
    }

    // Mongoose duplicate key error

    if(err.code === 11000){
        const message = `Duplicate ${object.keys(err.keyValue)} Entered`;
        err = new ErrorHander(message,400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};