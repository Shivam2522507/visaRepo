const User = require("../models/postUserModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//register a user
const user = async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      date: req.body.date,
    });
    await user.save();
    sendToken(user, 201, res);
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

//Login User
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Enter Email & Password",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

// Logout User
const logoutUser = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};

// Forgot Password
const forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
      });
    }

    // Get ResetPassword Token
    const resetToken = await user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, Please ignore it`;

    try {
      await sendEmail({
        email: user.email,
        subject: `Visa Website Password Recovery`,
        message,
      });

      res.status(200).json({
        success: true,
        message: `Email sent to ${user.email} successfully`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

// Reset Password
const resetPassword = async (req, res, next) => {
  try {
    // Creating token hash
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Reset Password Token is invalid or has been expired",
      });
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password does not match",
      });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

// get user details
const getUserDetails = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

// update user password
const updateUserPassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

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

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);

  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};


// update user profile
const updateUserProfile = async (req, res, next) => {
  try {
   
   const newUserData = {
      email: req.body.email,
   }

   const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
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


// get all users
const getAllUsers = async (req, res, next) => {
   try {
    
      const users = await User.find();

      res.status(200).json({
         success: true,
         users,
      });
 
   } catch (error) {
     res.status(400).send({ success: false, msg: error.message });
   }
 };


// get single users
const getSingleUser = async (req, res, next) => {
   try {
    
      const user = await User.findById(req.params.id);


      if (!user) {
         return res.status(400).json({
           success: false,
           message: `User does not exist with Id: ${req.params.id}`,
         });
       }


      res.status(200).json({
         success: true,
         user,
      });
 
   } catch (error) {
     res.status(404).send({ success: false, msg: error.message });
   }
 };


// get delete users
const deleteUser = async (req, res, next) => {
   try {
    
      const user = await User.findById(req.params.id);


      if (!user) {
         return res.status(400).json({
           success: false,
           message: `User does not exist with Id: ${req.params.id}`,
         });
       }

       await user.deleteOne();


       res.status(200).json({
         success:true,
         message:"User deleted Successfully"
     })
 
   } catch (error) {
     res.status(404).send({ success: false, msg: error.message });
   }
 };



module.exports = {
  user,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updateUserPassword,
  updateUserProfile ,
  getAllUsers,
  getSingleUser,
  deleteUser
};
