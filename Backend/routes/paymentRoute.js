const express= require("express");
const payment_Route = express();


const bodyParser = require('body-parser');

payment_Route.use(bodyParser.json());
payment_Route.use(bodyParser.urlencoded({extended: true}));


const ccavRequestHandler = require('../controllers/ccavRequestHandler.js');
const ccavResponseHandler = require('../controllers/ccavResponseHandler.js');



payment_Route.post('/ccavRequestHandler', function (request, response){
	ccavRequestHandler.postReq(request, response);
});


payment_Route.post('/ccavResponseHandler', function (request, response){
    ccavResponseHandler.postRes(request, response);
});  
