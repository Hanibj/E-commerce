const express =require('express')
const ServiceAuth=require('../Service/AuthentificationServices')
const routeurAuth=express.Router()

routeurAuth.post('/Signin',ServiceAuth.SigninUser)

routeurAuth.post('/SignUp',ServiceAuth.SignupUser)

routeurAuth.get('/Profile/:email',ServiceAuth.GetProfile)
module.exports=routeurAuth