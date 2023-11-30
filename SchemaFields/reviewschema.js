import mongoose from "mongoose";

const Review=new mongoose.Schema({
  content:{
    type: String,
    required: true,
    maxlength: 500,
  },
  rating:{
    type: Number,
    required: true,
    minvalue: 1,
  },
  author:{
    type: String,
    required: true,
  },
  createdat:{
    type:Date,
  },
  
  
})

const Reviews=mongoose.model("Reviews",Review);

export default Reviews;