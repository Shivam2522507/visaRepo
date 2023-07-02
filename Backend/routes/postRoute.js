const express= require("express");
const post_route = express();
const {isAuthenticatedUser} = require("../middleware/auth")

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
const visaCard = require('../controllers/visaCardController');
const roe = require('../controllers/roeController')


// user contact route
post_route.post('/contact',postController.user_contact);   
post_route.get('/getContact',postController.getContact); 


//user routes
post_route.post('/signup',postUser.user); 
post_route.post('/login',postUser.loginUser); 
post_route.get('/logout',postUser.logoutUser); 


// visaCard Routes
post_route.post('/createVisaCard',visaCard.createVisaCard);   
post_route.get('/getAllVisaCard',isAuthenticatedUser,visaCard.getAllVisaCard);
post_route.get('/getMultiAllVisaCard',visaCard.getMultiAllVisaCard);
post_route.get('/getSigAllVisaCard',visaCard.getSigAllVisaCard);
post_route.put('/VisaCard/:id',visaCard.updateVisaCard);
post_route.get('/VisaCard/:id',visaCard.getVisaCardDetails);
post_route.delete('/VisaCardDelete/:id',visaCard.deleteVisaCard);  


//Roe Routes
post_route.get('/getRoe',roe.getRoe);
post_route.put('/Roe/:id',roe.updateRoe);

module.exports = post_route;