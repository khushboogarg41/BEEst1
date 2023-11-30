import mongoose from "mongoose";

const Movie=new mongoose.Schema({
  Title:{
    type: String,
    required: true,
  },
  Description:{
    type: Number,
    required: true,
  },
  Genre:{
    type: Number,
    required: true,
  },
  Relyr:{
    type:Number,
  },
  Reviews:{

  }
  
})

const Movies=mongoose.model("Movies",Movie);

export default Movies;