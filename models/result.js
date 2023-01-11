const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  
    courseID:{
        type:String,
        required:true
    },
    subject:{
        type: String,
        required: true,
        unique: true
    },
    userId:{
        type:String,
        required:true
    },
    marks:{
        type:String,
        required: true
    },
    pmarks:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model("Result",resultSchema); 