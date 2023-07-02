const User = require('../models/postUserModel');
const sendToken = require('../utils/jwtToken');

//register a user
const user = async(req,res)=>{
      try {
        const user = new User({
         email: req.body.email,
         password: req.body.password,
         date: req.body.date,
         });
          await user.save();
         sendToken(user,201,res);
      } catch (error) {
         res.status(400).send({ success:false,msg:error.message});
      }
 }

 

 //Login User
 const loginUser = async(req,res,next)=>{
   try {
      const {email,password} = req.body;

      if(!email || !password){
         return res.status(400).json({
            success:false,
            message:"Please Enter Email & Password"
        })
      }

      const user = await User.findOne({email}).select("+password");

      if(!user){
         return res.status(401).json({
            success:false,
            message:"Invalid email or password"
        })
      }

      const isPasswordMatched = await user.comparePassword(password);

      if(!isPasswordMatched){
         return res.status(401).json({
            success:false,
            message:"Invalid email or password"
        })
      }

      sendToken(user,200,res);
      
   } catch (error) {
      res.status(400).send({ success:false,msg:error.message});
   }
 }


 // Logout User

 const logoutUser = async(req,res,next)=>{

   res.cookie("token",null,{
      expires: new Date(Date.now()),
      httpOnly:true
   })

   res.status(200).json({
      success: true,
      message: "Logged Out"
   })
 }

 module.exports = {
    user,
    loginUser,
    logoutUser
 }
