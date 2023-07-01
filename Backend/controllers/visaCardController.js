const VisaCard = require("../models/visaCardModel");



// Create Card
exports.createVisaCard = async (req,res,next)=>{
    const visaCard = await VisaCard.create(req.body);

    res.status(201).json({
        success:true,
        visaCard
    })
}

// Get All Visa Card
exports.getAllVisaCard = async(req,res) =>{
    const visaCards = await VisaCard.find();
    res.status(200).json({
        success:true,
        visaCards
    })
}


// Update Visa Card

exports.updateVisaCard = async (req,res,next) =>{
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

}

// delete visa card

exports.deleteVisaCard = async(req,res,next)=>{
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



}