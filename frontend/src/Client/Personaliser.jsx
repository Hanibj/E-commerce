import React from 'react'
import Navbaruser from '../Components/NavBar/NavBaruser'
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarProduct from '../Components/Sidebar/SidebarProduct'
import '../Pages/Shop/Shop.css'
import Search from '../Components/SearchBar/Search'
import  { useEffect, useState } from 'react'

import { FaDollyFlatbed } from "react-icons/fa";
import { useParams } from 'react-router-dom';


  
const  Personaliser=()=> {
   const [products,setProduct]=useState([])
  const {natureproduit}=useParams()

   //Fonction d'affichage des Produit

   useEffect(()=>{
    const AfficheProduit =async()=>{
        const response =await fetch(`http://localhost:4000/api/user/Product/${natureproduit}`)
        const jso=await response.json()
        if(!response.ok){
            console.log('erreur de recupération des produit')

        } else 
        {
            console.log('reccupération etablir');
            console.log(jso)
            setProduct(jso)
        }
    }
    AfficheProduit()
   },[natureproduit])
const handleCard =(e,product)=>{
  window.location.href=`/Client/Card/${product._id}`
}

    return (
        <>
        {/* <Navbaruser/> */}
       <Navbaruser/> 
        <Search/>
<div className='Box'>
<div className='Side'>
  <SidebarProduct/>
</div>
 

  <div class="card-body">
 
  </div>

 
  <div class="card-body">
    <h5 class="card-title"> Pas De Produit Personalisier Jusqu'a maintenant</h5>
 
   

</div>
</div>
   
      </>
       )
  }
  
//     
export default  Personaliser