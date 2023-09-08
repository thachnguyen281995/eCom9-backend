const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    disCount: {
      type: Number,
    },
    ram: {
      type: Array,
      required: true,
    },
    option: [
      {
        public_id: String,
        ram:String,
        price:Number,
        oldPrice:Number
      },
    ],
    slug: {
      type: String,
      // required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    strikePrice: {
      type: Number,
    },
    category: {
      type: String,
      required: true,
    },
    targetDate: {
      type: String,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    manHinh: String,
    cameraSau: String,
    cameraSelfie: String,
    boNhoTrong: String,
    cpu: String,
    dungLuongPin: String,
    theSim: String,
    heDieuHanh: String,
    xuatXu: String,
    thoiGianRaMat: String,
    danhGiaChiTiet:String,
    slideImage :[
      {
        url:String
      }
    ],
    descImage:[],
    color: [],
    tags: String,
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema, "products");
