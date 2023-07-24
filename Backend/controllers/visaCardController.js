const VisaCard = require("../models/visaCardModel");

// Create Card
exports.createVisaCard = async (req,res,next)=>{
    try {
        const visaCard = await VisaCard.create(req.body);

        res.status(201).json({
            success:true,
            visaCard
        })
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message});
    }
  
}

// Get All Visa Card
exports.getAllVisaCard = async(req,res) =>{
    try {
        const visaCards = await VisaCard.find();
        res.status(200).json({
            success:true,
            visaCards
        })
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message}); 
    }
   
}
exports.getMultiAllVisaCard = async(req,res) =>{
    try {
        const visaCards = await VisaCard.find({visaType:"Multiple"});
        res.status(200).json({
            success:true,
            visaCards
        })
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message}); 
    }
   
}
exports.getSigAllVisaCard = async(req,res) =>{
    try {
        const visaCards = await VisaCard.find({visaType:"Single"});
        res.status(200).json({
            success:true,
            visaCards
        })
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message}); 
    }
   
}

//get visaCard details
exports.getVisaCardDetails = async(req,res,next)=>{
    try {
        const visaCard = await VisaCard.findById(req.params.id);
    
        if(!visaCard){
            return res.status(500).json({
                success:false,
                message:"VisaCard Not Found"
            })
        }

        res.status(200).json({
            success:true,
            visaCard
        })
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message});
    }
    
}

// Update Visa Card
exports.updateVisaCard = async (req,res,next) =>{
    try {
        let visaCard = await VisaCard.findById(req.params.id);

        if(!visaCard){
            return res.status(500).json({
                success:false,
                message:"VisaCard Not Found"
            })
        }
    
        visaCard = await VisaCard.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
    
        res.status(200).json({
            success:true,
            visaCard
        }) 
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message});
    }
    

}

// delete visa card
exports.deleteVisaCard = async(req,res,next)=>{
    try {
        const visaCard = await VisaCard.findById(req.params.id);
    
        if(!visaCard){
            return res.status(500).json({
                success:false,
                message:"VisaCard Not Found"
            })
        }
    
        await visaCard.deleteOne();
    
        res.status(200).json({
            success:true,
            message:"Visa Card deleted Successfully"
        })
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message});
    }
}