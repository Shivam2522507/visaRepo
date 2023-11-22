const express = require('express')
const uploadVisaRouter = express.Router();
const multer = require('multer')
const uploadVisaController = require('../controllers/uploadVisaController');
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

uploadVisaRouter.post('/uploadVisa', upload.fields([
    { name: 'visa', maxCount: 1 }
]),uploadVisaController.addUploadVisa);

uploadVisaRouter.post('/uploadCoVisa', upload.any(),uploadVisaController.addCoVisa);

// uploadVisaRouter.post('/getVisaByBookingId',uploadVisaController.getVisaByBookingId);
// uploadVisaRouter.put('/editVisa', upload.fields([
//     { name: 'visa', maxCount: 1 }
// ]),uploadVisaController.EditVisa);
module.exports = uploadVisaRouter