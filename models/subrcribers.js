const mongoose=require('mongoose')
const susbrcribersschema= new mongoose.Schema({
    name:{
  type:String,
  requied : true
    },
    subcribertochanel:{  type:String,
        requied : true
    },
   
    subcribeDate:{  type:Date,
        requied : true,
        default: Date.now
    }
})
module.exports= mongoose.model('Subcribers', susbrcribersschema)