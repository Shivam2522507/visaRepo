const ROE = require("../models/roeModel");






// Get All Roe
exports.getRoe = async(req,res) =>{
    const roes = await ROE.find();
    res.status(200).json({
        success:true,
        roes
    })
}


// Update Roe
exports.updateRoe = async (req,res,next) =>{
    let roe = await ROE.findById(req.params.id);

    if(!roe){
        return res.status(500).json({
            success:false,
            message:"ROE Not Found"
        })
    }

    roe = await ROE.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        roe
    })

}