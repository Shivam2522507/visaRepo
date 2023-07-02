
// Create Token and save in cookie

const sendToken = (user,statusCode,res)=>{

    const token = user.getJWTToken();

    // Option for cookie
    const options = {
        maxAge: 5 * 24 * 60 * 60 * 1000,
        httpOnly:true
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });


};

module.exports = sendToken;