const express= require("express");
const post_route = express();
const {isAuthenticatedUser,isAuthenticatedAdmin} = require("../middleware/auth");


const bodyParser = require('body-parser');

post_route.use(bodyParser.json());
post_route.use(bodyParser.urlencoded({extended: true}));


const postController = require('../controllers/postController');
const postUser = require('../controllers/userController');
const postAdmin = require('../controllers/adminController');
const roe = require('../controllers/roeController');
const couponController = require('../controllers/couponController')



// user contact route
post_route.post('/contact',postController.user_contact);   
post_route.get('/getContact',isAuthenticatedAdmin,postController.getContact); 
post_route.delete('/deleteContact',isAuthenticatedAdmin,postController.deleteContact); 

// coupon route
post_route.post('/admin/createCoupon',isAuthenticatedAdmin,couponController.createCoupon);
post_route.get('/admin/getAllCoupon',isAuthenticatedAdmin,couponController.getAllCoupon);
post_route.delete('/admin/deleteCoupon',isAuthenticatedAdmin,couponController.deleteCoupon);
post_route.post('/validateCoupon',couponController.validateCoupon);
post_route.put('/admin/updateCoupon/:id',isAuthenticatedAdmin,couponController.updateCoupon);


//user routes
post_route.post('/signup',postUser.user); 
post_route.post('/login',postUser.loginUser); 
post_route.post('/password/forgot',postUser.forgotPassword); 
post_route.put('/password/reset/:token',postUser.resetPassword); 
post_route.get('/logout',postUser.logoutUser); 
post_route.get('/me',isAuthenticatedUser,postUser.getUserDetails); 
post_route.put('/password/update',isAuthenticatedUser,postUser.updateUserPassword); 
post_route.put('/me/update',isAuthenticatedUser,postUser.updateUserProfile); 
post_route.get('/admin/allUsers',isAuthenticatedAdmin,postUser.getAllUsers);
post_route.get('/admin/user/:id',isAuthenticatedAdmin,postUser.getSingleUser);
post_route.delete('/admin/user/:id',isAuthenticatedAdmin,postUser.deleteUser);

post_route.post('/google/login',postUser.googleLoginUser); 



//Admin routes
post_route.post('/adminSignup',postAdmin.admin); 
post_route.post('/adminLogin',postAdmin.loginadmin); 
post_route.post('/adminpassword/forgot',postAdmin.forgotAdminPassword); 
post_route.put('/adminpassword/reset/:token',postAdmin.resetAdminPassword); 
post_route.get('/adminLogout',postAdmin.logoutadmin); 
post_route.get('/admin',isAuthenticatedAdmin,postAdmin.getAdminDetails); 
post_route.put('/adminPassword/update',isAuthenticatedAdmin,postAdmin.updateAdminPassword); 
post_route.put('/admin/update',isAuthenticatedAdmin,postAdmin.updateAdminProfile); 
 


//Roe Routes
post_route.get('/getRoe',roe.getRoe);
post_route.put('/Roe/:id',isAuthenticatedAdmin,roe.updateRoe);

module.exports = post_route;