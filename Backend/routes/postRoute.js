const express= require("express");
const post_route = express();
const {isAuthenticatedUser,isAuthenticatedAdmin} = require("../middleware/auth")

const bodyParser = require('body-parser');

post_route.use(bodyParser.json());
post_route.use(bodyParser.urlencoded({extended: true}));

const multer = require('multer');
const path = require('path');

post_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/userUploadFile'),function(error,success){
            if(error){
                console.log(error);
            }
        });
    },
    filename:function(){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error,success){
            if(error){
                console.log(error);
            }
        })
    }
});

const upload = multer({storage:storage});

const postController = require('../controllers/postController');
const postUser = require('../controllers/userController');
const postAdmin = require('../controllers/adminController');
const visaCard = require('../controllers/visaCardController');
const roe = require('../controllers/roeController')


// user contact route
post_route.post('/contact',postController.user_contact);   
post_route.get('/getContact',postController.getContact); 


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



//Admin routes
post_route.post('/adminSignup',postAdmin.admin); 
post_route.post('/adminLogin',postAdmin.loginadmin); 
post_route.post('/adminpassword/forgot',postAdmin.forgotAdminPassword); 
post_route.put('/adminpassword/reset/:token',postAdmin.resetAdminPassword); 
post_route.get('/adminLogout',postAdmin.logoutadmin); 
post_route.get('/admin',isAuthenticatedAdmin,postAdmin.getAdminDetails); 
post_route.put('/adminPassword/update',isAuthenticatedAdmin,postAdmin.updateAdminPassword); 
post_route.put('/admin/update',isAuthenticatedAdmin,postAdmin.updateAdminProfile); 
 


// visaCard Routes
post_route.post('/createVisaCard',isAuthenticatedAdmin,visaCard.createVisaCard);   
post_route.get('/getAllVisaCard',visaCard.getAllVisaCard);
post_route.get('/getMultiAllVisaCard',visaCard.getMultiAllVisaCard);
post_route.get('/getSigAllVisaCard',visaCard.getSigAllVisaCard);
post_route.put('/VisaCard/:id',isAuthenticatedAdmin,visaCard.updateVisaCard);
post_route.get('/VisaCard/:id',isAuthenticatedUser,visaCard.getVisaCardDetails);
post_route.delete('/VisaCardDelete/:id',isAuthenticatedAdmin,visaCard.deleteVisaCard);  


//Roe Routes
post_route.get('/getRoe',roe.getRoe);
post_route.put('/Roe/:id',isAuthenticatedAdmin,roe.updateRoe);

module.exports = post_route;