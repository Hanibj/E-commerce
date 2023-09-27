import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarProduct from '../../Components/Sidebar/SidebarProduct';
import  '../../Pages/Shop/Shop.css'
import Search from '../../Components/SearchBar/Search';
import NavBarAdmin from '../../Components/NavBar/NavBarAdmin';
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";


  
const AffichierProduit=()=> {
   const [products,setProduct]=useState([])


   //Fonction d'affichage des Produit

   useEffect(()=>{
    const AfficheProduit =async()=>{
        const response =await fetch('http://localhost:4000/api/Admin/Product')
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
   },[])



   //Fonction de modification des Produit
   const handleUpdate =(e,p) =>{
    e.preventDefault()
    window.location.href=`/Admin/Product/ModifierProduit/${p._id}`
   }



   //Fonction de suppression des Produit
   const handleSuppremier=async (e,p)=>{
    e.preventDefault()
    const response=await fetch(`http://localhost:4000/api/Admin/SuppremierProduit/${p._id}`,{
        method:'DELETE'
    })
    const jso=await response.json()
    if(!response.ok){
        console.log('erreur de suppression des produit')

    } else 
    {
        console.log('supression etablir');
        window.location.reload()
    }
   }




    return (
        <>
        {/* <Navbaruser/> */}
       <NavBarAdmin/> 
        <Search/>
<div className='Box'>
<div className='Side'>
  <SidebarProduct/>
</div>
<div className='Affiche'>
      <div className="bg-white mt-0 ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 pt-1">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <div key={product.id}>
              <div  className="group relative">
                {product.length<0?<h1>Pas De Produit</h1>:<>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={`http://localhost:4000/${product.imageproduit}`}
                    alt={product.imageAlt}

                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href='/Card'>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.nomproduit}
                      </a>
                    </h3>
                    <p className="text-sm font-medium text-gray-900">{product.descriptionproduit}</p>
                  <p className="text-sm font-medium text-gray-900">{product.tailleproduit}</p>
                    <p className="mt-1 text-sm text-gray-500">{product.prix}DT</p>
                  </div>

                

                  
                </div>
                </>}
              </div>
              <button  onClick={(e)=>handleUpdate(e,product)} className="btn btn-primary  " ><MdModeEditOutline/></button>
              <button type="button" onClick={(e)=>handleSuppremier(e,product)} 
              className="btn btn-danger"><AiFillDelete/></button>

              </div>
            ))}
          
          </div>
        </div>
      </div>
      </div>
    </div>
      </>
       )
  }
  
//     
export default AffichierProduit