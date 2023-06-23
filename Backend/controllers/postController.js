const Contact = require('../models/postModel');


const user_contact = async(req,res)=>{
      try {
        const contact = new Contact({
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         contact: req.body.contact,
         email: req.body.email,
         message: req.body.message,
         date: req.body.date,
         });
         const contact_post_data = await contact.save();
         res.status(200).send({ success:true,msg:'Contact Post Data',data:contact_post_data});
      } catch (error) {
         res.status(400).send({ success:false,msg:error.message});
      }
 }



 module.exports = {
    user_contact
 }
