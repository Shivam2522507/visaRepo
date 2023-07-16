const Admin = require('../models/postAdminModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

//register a admin
const admin = async(req,res)=>{
      try {
        const admin = new Admin({
         email: req.body.email,
         password: req.body.password,
         date: req.body.date,
         });
          await admin.save();
         sendToken(admin,201,res);
      } catch (error) {
         res.status(400).send({ success:false,msg:error.message});
      }
 }

 

 //Login admin
 const loginadmin = async(req,res,next)=>{
   try {
      const {email,password} = req.body;

      if(!email || !password){
         return res.status(400).json({
            success:false,
            message:"Please Enter Email & Password"
        })
      }

      const admin = await Admin.findOne({email}).select("+password");

      if(!admin){
         return res.status(401).json({
            success:false,
            message:"Invalid email or password"
        })
      }

      const isPasswordMatched = await admin.comparePassword(password);

      if(!isPasswordMatched){
         return res.status(401).json({
            success:false,
            message:"Invalid email or password"
        })
      }

      sendToken(admin,200,res);
      
   } catch (error) {
      res.status(400).send({ success:false,msg:error.message});
   }
 }


 // Logout admin

 const logoutadmin = async(req,res,next)=>{

   res.cookie("token",null,{
      expires: new Date(Date.now()),
      httpOnly:true
   })

   res.status(200).json({
      success: true,
      message: "Logged Out"
   })
 }

 
 // Forgot Password

 const forgotAdminPassword = async(req,res,next)=>{
   try {
      const admin = await Admin.findOne({email:req.body.email});

      if(!admin){
         return res.status(404).json({
            success:false,
            message:"admin not Found"
        })
      }

      // Get ResetPassword Token
      const resetToken = await admin.getResetPasswordToken();

      await admin.save({validateBeforeSave: false});

      const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/adminpassword/reset/${resetToken}`;

      const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, Please ignore it`

      try {
         await sendEmail({
            email:admin.email,
            subject: `Visa Website Password Recovery`,
            message,
         });

         res.status(200).json({
            success: true,
            message: `Email sent to ${admin.email} successfully`
         })
         
      } catch (error) {
         admin.resetPasswordToken = undefined;
         admin.resetPasswordExpire = undefined;
         await admin.save({validateBeforeSave: false});
         return res.status(500).json({
            success:false,
            message:error.message
        })
      }

   } catch (error) {
      res.status(400).send({ success:false,msg:error.message});
   }
 }

 // Reset Password
 const resetAdminPassword = async(req,res,next)=>{
   try {

      // Creating token hash
      const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

      const admin = await Admin.findOne({
         resetPasswordToken,
         resetPasswordExpire: { $gt: Date.now()},
      });

      if(!admin){
         return res.status(404).json({
            success:false,
            message:"Reset Password Token is invalid or has been expired"
        })
      }

      if(req.body.password !== req.body.confirmPassword){
         return res.status(400).json({
            success:false,
            message:"Password does not match"
        })
      }

      admin.password = req.body.password;
      admin.resetPasswordToken = undefined;
      admin.resetPasswordExpire = undefined;

      await admin.save();

      sendToken(admin, 200, res)


   } catch (error) {
      res.status(400).send({ success:false,msg:error.message});
   }
 }

// get Admin details
 const getAdminDetails = async(req,res,next)=>{
   try {

      const admin = await Admin.findById(req.admin.id);

      res.status(200).json({
         success: true,
         admin,
      });

     
   } catch (error) {
      res.status(400).send({ success:false,msg:error.message});
   }
 }



// update Admin password
const updateAdminPassword = async (req, res, next) => {
   try {
     const admin = await Admin.findById(req.admin.id).select("+password");
 
     const isPasswordMatched = await admin.comparePassword(req.body.oldPassword);
 
     if (!isPasswordMatched) {
       return res.status(400).json({
         success: false,
         message: "Old Password is Incorrect",
       });
     }
 
     if (req.body.newPassword !== req.body.confirmPassword) {
       return res.status(400).json({
         success: false,
         message: "Password and Confirm Password does not match",
       });
     }
 
     admin.password = req.body.newPassword;
 
     await admin.save();
 
     sendToken(admin, 200, res);
     
   } catch (error) {
     res.status(400).send({ success: false, msg: error.message });
   }
 };


 // update admin profile
const updateAdminProfile = async (req, res, next) => {
   try {
    
    const newAdminData = {
       email: req.body.email,
    }
 
    const admin = await Admin.findByIdAndUpdate(req.admin.id,newAdminData,{
       new: true,
       runValidators : true,
       useFindAndModify: false,
    })
 

 
     res.status(200).json({
       success: true
     })
 
   } catch (error) {
     res.status(400).send({ success: false, msg: error.message });
   }
 };

 module.exports = {
    admin,
    loginadmin,
    logoutadmin,
    forgotAdminPassword,
    resetAdminPassword,
    getAdminDetails,
    updateAdminPassword,
    updateAdminProfile
 }
