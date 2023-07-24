const mongoose = require("mongoose");

const orderVisaSchema = new mongoose.Schema({
  visaType: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      OnwardDate: {
        type: String,
        required: true,
      },
      ReturnDate: {
        type: String,
        required: true,
      },
      Passengers: {
        type: Number,
        required: true,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "VisaCard",
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  documents: { type: Object, required: true },

  paymentInfo: {
    id: {
      type: String,
      default: null,
      required: true,
    },
    status: {
      type: String,
      default: 0,
      required: true,
    },
  },

  paidAt: {
    type: Date,
    default: 0,
    required: true,
  },

  itemsPrice: {
    type: Number,
    default: 0,
    required: true,
  },

  taxPrice: {
    type: Number,
    default: 0,
    required: true,
  },

  CoupenPrice: {
    type: Number,
    default: 0,
    required: true,
  },

  totalPrice: {
    type: Number,
    default: 0,
    required: true,
  },

  orderStatus:{
    type: String,
    required: true,
    default: "Processing",
  },
  
  createdAt:{
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("VisaStep1", orderVisaSchema);
