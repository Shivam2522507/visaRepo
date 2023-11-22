const mongoose = require("mongoose");

const applyVisaSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  visaType: {
    type: String,
    required: true,
  },
  onwardDate: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
  numberOfPassengers: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  passportNo: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  documents: {
    photograph: {
      type: String,
      required: true,
    },
    passport: {
      type: String,
      required: true,
    },
    qualifyingCriteria: {
      type: String,
      required: true,
    },
    addressProof: {
      type: String,
      required: true,
    },
    panCard: {
      type: String,
      required: true,
    },
    returnTicket: {
      type: String,
      required: true,
    },
    hotelConfirmation: {
      type: String,
      required: true,
    },
  },
  coTravelers: [],
  GSTInvoice: {
    type: String,
    default: "null",
  },
  okayToBoard: {
    type: String,
    default: "null",
  },
  insuranceType: {
    type: String,
    default: "null",
  },
  couponCode: {
    type: String,
    default: "null",
  },
  status: {
    type: String,
    default: "Processing",
  },
  visa: {
    type: String,
    default:"null"
  },
  taxPrice: {
    type: Number,
    default: 0,
  },
  discountPrice: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  bookingDate:{
    type:Date,
  },


});

module.exports = mongoose.model('VisaBooking',applyVisaSchema);
