const express = require('express')
const applyVisaRouter = express.Router();
const multer = require('multer')
const applyVisaController = require('../controllers/applyVisaController');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,path.join(__dirname,'../public/userUploadFile/'));
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname);
    },
});

const upload = multer({storage: storage});

applyVisaRouter.post('/addMainTraveler', upload.fields([
    { name: 'photograph', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
    { name: 'qualifyingCriteria', maxCount: 1 },
    { name: 'addressProof', maxCount: 1 },
    { name: 'panCard', maxCount: 1 },
    { name: 'returnTicket', maxCount: 1 },
    { name: 'hotelConfirmation', maxCount: 1 },
]),applyVisaController.addMainTraveler);

applyVisaRouter.post('/addCoTraveler', upload.any() ,applyVisaController.addCoTraveler);
applyVisaRouter.post('/getTravelerById',applyVisaController.getTravelerById);
applyVisaRouter.get('/getAllTraveler',applyVisaController.getAllTraveler);
applyVisaRouter.put('/addOtherTravelerFields/:id',applyVisaController.addOtherTravelerFields);
applyVisaRouter.put('/updateCoTravelerStatus',applyVisaController.updateCoTravelerStatus);
applyVisaRouter.get('/search/:key',applyVisaController.searchTraveler);
applyVisaRouter.get('/filter/:key',applyVisaController.filterByVisaType);
applyVisaRouter.post('/filter/date',applyVisaController.filterByDate);
applyVisaRouter.delete('/deleteTraveler',applyVisaController.deleteTraveler);

module.exports = applyVisaRouter