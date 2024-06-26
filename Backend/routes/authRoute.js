const authRouter = require("express").Router();
const passport = require("passport");

authRouter.get("/login/failed",(req,res)=>{
    res.status(401).json({
       error:true,
       message:"Login Failure" ,
    })
})
authRouter.get("/login/success",(req,res)=>{
  if(req.user){
    res.status(200).json({
        error:false,
        message:"Successfully LogedIn",
        user:req.user,
    })
  }else{
    res.status(403).json({error:true,message:"Not Authorized"})
  }
})
authRouter.get(
    "/google/callback",
    passport.authenticate("google",{
        successRedirect:"http://localhost:3000",
        failureRedirect:"/login/failed",
    })
)

authRouter.get("/google",passport.authenticate("google",["profile","email"]));

authRouter.get("/logout",(req,res)=>{
    req.logOut();
    res.redirect("http://localhost:3000");
})

module.exports = authRouter;