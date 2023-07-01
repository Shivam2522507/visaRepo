const User = require('../models/postUserModel');


const user = async(req,res)=>{
      try {
        const user = new User({
         email: req.body.email,
         password: req.body.password,
         date: req.body.date,
         });
          await user.save();
         const token = user.getJWTToken();
         res.status(200).json({success: true,token})
      } catch (error) {
         res.status(400).send({ success:false,msg:error.message});
      }
 }

 

 //Login User
 const loginUser = async(req,res,next)=>{
   try {
      const {email,password} = req.body;

      if(!email || !password){
         
      }
      
   } catch (error) {
      res.status(400).send({ success:false,msg:error.message});
   }
 }


 module.exports = {
    user
 }
