const Coupon = require("../models/couponModel");

// Create a new coupon
exports.createCoupon = async (req, res) => {
  try {
    const { code, discount,startDate, expiryDate, isMultiUse, maxUses, forVisaId } = req.body;

    const coupon = new Coupon({
      code,
      discount,
      startDate,
      expiryDate,
      isMultiUse,
      maxUses,
      forVisaId,
    });
    

    await coupon.save();

    res.status(201).json({ success: true, coupon });
  } catch (err) {
    res.status(500).json({ error: "Unable to create the coupon" });
  }
};

// get all coupon
exports.getAllCoupon = async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.status(200).json({success: true, coupons} );
  } catch (err) {
    res.status(500).json({ error: "Unable to get the coupon" });
  }
};

// Check if a coupon is valid and return the discount percentage if valid
exports.validateCoupon = async (req, res) => {
  try {
    const { code } = req.body;

    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }

    const currentDate = new Date();

    if(coupon.forVisaId != "null"){
      if(req.body.visaId != coupon.forVisaId ){
        return res.status(400).json({ error: "This Coupon is not valid for this Visa" });
      }
  
    }

    // Check if the current date is before the start date of the coupon
    if (currentDate < coupon.startDate) {
      return res.status(400).json({ error: "Coupon is not yet valid" });
    }

    if (currentDate > coupon.expiryDate) {
      return res.status(400).json({ error: "Coupon has expired" });
    }

    if (!coupon.isMultiUse && coupon.isUsed) {
      return res.status(400).json({ error: "Coupon has already been used" });
    }

    if (coupon.isMultiUse && coupon.usedCount >= coupon.maxUses) {
      return res
        .status(400)
        .json({ error: "Coupon has reached its maximum usage limit" });
    }

    // If it's a multi-use coupon, increment the usedCount
    if (coupon.isMultiUse) {
      coupon.usedCount++;
    } else {
      // For single-use coupons, mark the coupon as used
      coupon.isUsed = true;
    }

    await coupon.save();

    res.status(200).json({ discount: coupon.discount });
  } catch (err) {
    res.status(500).json({ error: "Unable to validate the coupon" });
  }
};



  // Delete a coupon by code
exports.deleteCoupon = async (req, res) => {
    try {
      const { code } = req.body;
  
      const coupon = await Coupon.findOneAndDelete({ code });
  
      if (!coupon) {
        return res.status(404).json({ error: 'Coupon not found' });
      }
  
      res.status(200).json({success: true, message: 'Coupon deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Unable to delete the coupon' });
    }
  };
  

  // Update Coupon Card
exports.updateCoupon= async (req,res,next) =>{
    try {
        let CouponData= await Coupon.findById(req.params.id);

        if(!CouponData){
            return res.status(500).json({
                success:false,
                message:"CouponCard Not Found"
            })
        }
    
        CouponData = await Coupon.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
    
        res.status(200).json({
            success:true,
            CouponData
        }) 
    } catch (error) {
        res.status(400).send({ success:false,msg:error.message});
    }
    

}