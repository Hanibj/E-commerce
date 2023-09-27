import React, { useEffect, useState } from 'react'

import Search from '../../../Components/SearchBar/Search'
import NavBarAdmin from '../../../Components/NavBar/NavBarAdmin'
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
const ReservationClient = () => {
    const[reservation,setReservation]=useState([])

 

    
   useEffect(()=>{
    
    const AfficheReservation =async()=>{
        const response =await fetch(`http://localhost:4000/api/Admin/AllReserver`)
        const jso=await response.json()
        if(!response.ok){
            console.log('erreur de recupération de reservation')

        } else 
        {
            console.log('reccupération etablir');
            console.log(jso)
            setReservation(jso)
        }
    }
    AfficheReservation()
   },[])
const handleUpdate=(e,reser)=>{
    e.preventDefault()
    console.log(reser._id)
    window.location.href=`/Admin/Reservation/Modifier/${reser._id}`
}
  return (
   <>
   <NavBarAdmin/>
   <Search/>
   <table className="table table-striped  mt-8" style={{border:'1px solide '}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom Produit</th>
      <th scope="col">Prix</th>
      <th scope="col">Type De Produit</th>
      <th scope="col">Taille De Pproduit</th>
      <th scope="col">Quantité</th>
      <th scope="col">Statuts De Reservation</th>
      <th scope="col"> </th>
     
    </tr>
  </thead>
  <tbody>
    {reservation && reservation.map((reser,index)=>(
    <tr key={reser._id}>
      <th scope="row">{index+1}</th>
      <td>{reser.nomproduit}</td>
      <td>{reser.prix}</td>
      <td>{reser.typeproduit}</td>
      <td>{reser.tailleproduit}</td>
      <td>{reser.nombre}</td>
      <td>{reser.statutsres}</td>
      <td>   <button  onClick={(e)=>handleUpdate(e,reser)} className="btn btn-primary  " ><MdModeEditOutline/></button>
     </td>
    </tr>
   ))}
  </tbody>
</table>
   </>
  )
}

 

export default ReservationClient