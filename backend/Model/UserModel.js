var mongoose =require('mongoose')

var Schema=mongoose.Schema

const UserSchema=new mongoose.Schema({
    nom:{type:String ,required:true},
    prenom:{type:String ,required:true},
    datenaiss:{type:String ,required:true},
    email:{type:String ,required:true},
    tel:{type:Number ,required:true},
    password:{type:String ,required:true},
    date:new Date()
})
module.exports=mongoose.model('User',UserSchema)