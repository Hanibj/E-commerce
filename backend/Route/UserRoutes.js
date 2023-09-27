const  mongoose  = require("mongoose");
const express =require('express')
const multer =require('multer')
const servicesProduit=require('../Service/ProduitService')
const servicesReservation=require('../Service/ReservationService')
const routerUser =express.Router()


const upload = multer({ dest: 'uploads/' })


//produit Route
routerUser.post('/AjouterProdui',upload.single('imageproduit') ,servicesProduit.AjouterProduit)
routerUser.get('/Product',servicesProduit.AllProduct)
routerUser.get('/Produit/:id',upload.single('imageproduit') ,servicesProduit.singleProduct)
//produit selon le choix frip / new /personalisier
routerUser.get('/ProduitChoisir/:natureproduit' ,servicesProduit.ProductChoisie)

//Reservation route
routerUser.post("/Reserver",servicesReservation.ReserverProduit)
 routerUser.get("/AllReserver/:email",servicesReservation.AllReserverProduit)
// routerUser.get("/SuppremierReservation/:id",servicesReservation.DeleteReservation)
// routerUser.get("/ModifierReservation/:id",servicesReservation.ModifierReservation)


module.exports=routerUser