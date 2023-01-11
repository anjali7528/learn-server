const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    courseid:{
        type:String,
        required:true,
        
    },
    subject:{
      type:String,
      require:true
    },
    questions:[{        
        marks:{
          type:String
        },
        options:[{
            type: String,
            required: true,
        }],
        Answer:[{
            type: String,
            required: true,
        }],
        question:{
            type:String,
            required:true
        }
}],
  
    pmarks:{
        type:String,
    },

    creatorID:{
        type:String
    },
},{timestamps:true});

module.exports = mongoose.model("quiz",QuizSchema);