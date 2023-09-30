var mongoose =require('mongoose')

var Schema = mongoose.Schema;

var ProduitSchema = new mongoose.Schema({
    
    nomproduit : { type: String, required: true },
    descriptionproduit:{type:String,required: true},
    prix:{type:Number,required: true},
    imageproduit:{type:String,required: true},
    sexe:{type:String,required: true},
    typeproduit:{type:String,required: true},
    tailleproduit:{type:String,required: true},
    natureproduit:{type:String,required: true},
    nombre:{type:Number,required: true},
    lastActiveAt: Date
});

module.exports = mongoose.model('Produit', ProduitSchema);