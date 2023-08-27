const express = require("express");
const visa_route = express()
const {isAuthenticatedAdmin,isAuthenticatedUser} = require("../middleware/auth")

const bodyParser = require('body-parser');

visa_route.use(bodyParser.json());
visa_route.use(bodyParser.urlencoded({extended: true}));

const  visaCard = require('../controllers/visaCardController');

visa_route.post('/createVisaCard',isAuthenticatedAdmin,visaCard.createVisaCard);   
visa_route.get('/getAllVisaCard',visaCard.getAllVisaCard);
visa_route.get('/getMultiAllVisaCard',visaCard.getMultiAllVisaCard);
visa_route.get('/getSigAllVisaCard',visaCard.getSigAllVisaCard);
visa_route.put('/VisaCard/:id',isAuthenticatedAdmin,visaCard.updateVisaCard);
visa_route.get('/VisaCard/:id',isAuthenticatedUser,visaCard.getVisaCardDetails);
visa_route.delete('/VisaCardDelete/:id',isAuthenticatedAdmin,visaCard.deleteVisaCard); 


module.exports = visa_route;