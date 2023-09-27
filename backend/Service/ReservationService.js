const express =require ('express')
const mongoose=require('mongoose')
const Reservation =require('../Model/ReservationModel')


const ReserverProduit =async (req,res) =>{
    const nomproduit = req.body.nomproduit;
    const matriculeproduit = req.body.matriculeproduit;
    const prix = req.body.prix;
    const typeproduit=req.body.typeproduit
    const tailleproduit=req.body.tailleproduit
    const natureproduit=req.body.natureproduit
    const nombre=req.body.nombre
    const statutsres=req.body.statutsres
    const client=req.body.client

    try {
      const reservation = await Reservation.create({
         nomproduit:nomproduit, 
         matriculeproduit:matriculeproduit,
         natureproduit:natureproduit,
         nombre:nombre,
         prix: prix, 
         typeproduit:typeproduit,
         tailleproduit:tailleproduit,
         client:client,
         statutsres:statutsres
        });
      res.status(200).json(reservation);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Evenement invalide' });
    }
}



  //Get All Product
const AllReserverProduitParClient =async (req,res)=>{
const {email}=req.params
  const reservation =await Reservation.find({client:email})
  if(!reservation){
    return res.status(400).json("erreur du reservation")

  }
  console.log(reservation);
  return res.status(200).json(reservation)
}

const AllReserverProduit =async (req,res)=>{
    
      const reservation =await Reservation.find({})
      if(!reservation){
        return res.status(400).json("erreur du reservation")
    
      }
      console.log(reservation);
      return res.status(200).json(reservation)
    }


    const ModifierReservationClient =async(req,res)=>{
        const {id}=req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({error:'reservation is invalide'})
      }
      
        const reserv =await Reservation.findByIdAndUpdate({_id:id},{...req.body})
      if(!reserv){
      console.log("reservation invalide")
        return res.status(400).json(error);
      }  
        
        res.status(200).json(reserv)
      }
  //Get Single Reservation
  const SingleReserverProduitParClient =async (req,res)=>{
    const {id}=req.params
    console.log(id)
      const reservation =await Reservation.find({_id:id})
      if(!reservation){
        return res.status(400).json("erreur du reservation")
    
      }
      console.log(reservation);
      return res.status(200).json(reservation)
    } 

module.exports={
    ReserverProduit,
    AllReserverProduitParClient,
    AllReserverProduit,
    ModifierReservationClient,
    SingleReserverProduitParClient
}