import React, { useEffect, useState } from 'react'
import Navbaruser from '../Components/NavBar/NavBaruser'
import Search from '../Components/SearchBar/Search'

const Reservation = () => {
    const[reservation,setReservation]=useState([])

    const [email, setEmail] = useState('');
  

   
    const [userval,setUserval]=useState('')
    useEffect(()=>{
      const token = localStorage.getItem('token');
      setUserval(token)
      console.log(token)
      const  email  = JSON.parse(token);
      setEmail(email);
      console.log(email)
      
    },[])

    
   useEffect(()=>{
    
    const AfficheReservation =async()=>{
        const response =await fetch(`http://localhost:4000/api/User/AllReserver/${email}`)
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
   },[email])
  return (
   <>
   <Navbaruser/>
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
    </tr>
   ))}
  </tbody>
</table>
   </>
  )
}

export default Reservation