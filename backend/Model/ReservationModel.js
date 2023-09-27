var mongoose =require('mongoose')

var Schema = mongoose.Schema;

var ReservationSchema = new mongoose.Schema({
    matriculeproduit: { type: String, required: true },
    nomproduit : { type: String, required: true },
    prix:{type:Number,required: true},
    typeproduit:{type:String,required: true},
    tailleproduit:{type:String,required: true},
    natureproduit:{type:String,required: true},
    nombre: { type: Number, required: true },
    statutsres: { type: String, required: true },
    client: { type: String, required: true },
    lastActiveAt: Date
});

module.exports = mongoose.model('Reservation', ReservationSchema);