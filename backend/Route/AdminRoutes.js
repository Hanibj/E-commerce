const  mongoose  = require("mongoose");
const express =require('express')
const multer =require('multer')
const servicesAdmin=require('../Service/ProduitService')
const servicesReservation=require('../Service/ReservationService')

const routerAdmin =express.Router()


const upload = multer({ dest: 'uploads/' })

routerAdmin.post('/AjouterProdui',upload.single('imageproduit') ,servicesAdmin.AjouterProduit)
routerAdmin.get('/Product',servicesAdmin.AllProduct)
routerAdmin.get('/Produit/:id',upload.single('imageproduit') ,servicesAdmin.singleProduct)
routerAdmin.patch('/ModifierProduit/:id',upload.single('imageproduit') ,servicesAdmin.UpdateProduct)
routerAdmin.delete('/SuppremierProduit/:id',servicesAdmin.DeleteProduct)

//Reservation
routerAdmin.get("/AllReserver",servicesReservation.AllReserverProduit)
routerAdmin.patch("/ModifierReservationClient/:id", servicesReservation.ModifierReservationClient);
routerAdmin.get("/GetReservationClient/:id", servicesReservation.SingleReserverProduitParClient);
module.exports=routerAdmin