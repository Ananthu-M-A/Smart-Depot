const mongoose = require('mongoose');

const order = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userLoginData',
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productData',
        required: true,
      },
      productQuantity: {
        type: Number,
        required: true,
      },
      productPrice: {
        type: Number,
        required: true,
      },
      offerName: {
        type: String,
      },
      offerPrice: {
        type: Number,
      }
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'billingAddressData',
    required: true,
  },
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shippingAddressData',
    required: true,
  },
  orderStatus: {
    type: String,
    default: "orderInitiated",
  },
  returnOption: {
    type: Boolean,
    default: false,
  },
  deliveredDate : {
    type: String,
    required: false,
  },
  paymentStatus : {
    type: Boolean,
    default: false,
    required: true,
  },
  paymentId: {
    type: String,
    default: "Nil",
  },
  refundStatus: {
    type: Boolean,
    default: false,
  },
  refundId: {
    type: String,
    default: "Nil",
  },
});

const orderData = mongoose.model('orderData', order);
module.exports = orderData;
