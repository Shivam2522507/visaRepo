const Contact = require('../models/postModel');
const ApiFeatures = require("../utils/apiFeatures");


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

 const getContact = async(req,res)=>{
   try {
      const apiFeature = new ApiFeatures(Contact.find(),req.query).search();
      apiFeature.query = apiFeature.query.sort({ date: -1 });
      const contacts = await apiFeature.query;
      contacts.sort((a, b) => {
         const dateA = new Date(a.date);
         const dateB = new Date(b.date);
   
         if (dateA > dateB) return -1;
         if (dateA < dateB) return 1;
         return 0;
       });
      res.status(200).send({ success:true,msg:'Contacts Data',data:contacts});
      
   } catch (error) {
      res.status(400).send({ success:false,msg:error.message});
   }
 }


 module.exports = {
    user_contact,
    getContact
 }
