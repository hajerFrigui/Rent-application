const mongoose =require ('mongoose');

const annonceShema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : {type :String, require},
    price : {type :Number,require },
    img :{type:String ,require},

    type:{type : String ,require},
   category:{type:String, require},
    rented :{ type: String , require},
    numero :{type:Number , require},
    adress:{ type: String , require},
    disponibility :{type:String,require}


  

});

module.exports = mongoose.model('Annonce',annonceShema);
