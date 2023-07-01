const express= require("express");
const post_route = express();

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

post_route.post('/contact',postController.user_contact);   
post_route.get('/getContact',postController.getContact);   
post_route.post('/signup',postUser.user);   
post_route.post('/createVisaCard',visaCard.createVisaCard);   
post_route.get('/getAllVisaCard',visaCard.getAllVisaCard);
post_route.put('/VisaCard/:id',visaCard.updateVisaCard);
post_route.delete('/VisaCardDelete/:id',visaCard.deleteVisaCard);  
post_route.get('/getRoe',roe.getRoe);
post_route.put('/Roe/:id',roe.updateRoe);

module.exports = post_route;