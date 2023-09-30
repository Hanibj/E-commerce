// import React from 'react'
// import Navbaruser from '../../Components/NavBar/NavBaruser'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import SidebarProduct from '../../Components/Sidebar/SidebarProduct'
// import './Shop.css'
// import Search from '../../Components/SearchBar/Search'
// import  { useEffect, useState } from 'react'

// import { FaDollyFlatbed } from "react-icons/fa";


  
// const  Principale=()=> {
//    const [products,setProduct]=useState([])


//    //Fonction d'affichage des Produit

//    useEffect(()=>{
//     const AfficheProduit =async()=>{
//         const response =await fetch('http://localhost:4000/api/user/Product')
//         const jso=await response.json()
//         if(!response.ok){
//             console.log('erreur de recupération des produit')

//         } else 
//         {
//             console.log('reccupération etablir');
//             console.log(jso)
//             setProduct(jso)
//         }
//     }
//     AfficheProduit()
//    },[])
// const handleCard =(e,product)=>{
//   window.location.href=`/Client/Card/${product._id}`
// }

//     return (
//         <>
//         {/* <Navbaruser/> */}
//        <Navbaruser/> 
//         <Search/>
// <div className='Box'>
// <div className='Side'>
//   <SidebarProduct/>
// </div>
// <div className='Affiche'>
//       <div className="bg-white mt-0 ">
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 pt-1">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
//           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {products.map((product) => (
//                 <div key={product.id}>
//               <div  className="group relative">
//                 {product.length<0?<h1>Pas De Produit</h1>:<>
//                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                   <img
//                     src={`http://localhost:4000/${product.imageproduit}`}
//                     alt={product.imageAlt}

//                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                   />
                
//                 </div>
//                 <div className="mt-4 flex justify-between">
//                   <div>
//                     <h3 className="text-sm text-gray-700">
                 
//                         <span aria-hidden="true" className="absolute inset-0" />
//                         {product.nomproduit}
                      
//                     </h3>
//                     <p className="text-sm font-medium text-gray-900">{product.descriptionproduit}</p>
//                   <p className="text-sm font-medium text-gray-900">{product.tailleproduit}</p>
//                     <p className="mt-1 text-sm text-gray-500">{product.prix}DT</p>
//                   </div>

                

                  
//                 </div>
//                 </>}
//               </div>
//               <button onClick={(e)=>handleCard(e,product)} className="btn btn-primary  " ><FaDollyFlatbed/></button>
              

//               </div>
//             ))}
          
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//       </>
//        )
//   }
  

// export default Principale
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbaruser from '../../Components/NavBar/NavBaruser';
import SidebarProduct from '../../Components/Sidebar/SidebarProduct';
import './Shop.css';
import Search from '../../Components/SearchBar/Search';
import { FaDollyFlatbed } from 'react-icons/fa';

const Principale = () => {
  const [products, setProducts] = useState([]);

  // Fonction d'affichage des Produits
  useEffect(() => {
    const AfficheProduit = async () => {
      const response = await fetch('http://localhost:4000/api/user/Product');
      const jso = await response.json();
      if (!response.ok) {
        console.log('erreur de récupération des produits');
      } else {
        console.log('récupération établie');
        console.log(jso);
        setProducts(jso);
      }
    };
    AfficheProduit();
  }, []);

  const handleCard = (e, product) => {
    window.location.href = `/Client/Card/${product._id}`;
  };

  return (
    <>
      <Navbaruser />
      <Search onSearchResults={(results) => setProducts(results)} />      <div className='Box'>
        <div className='Side'>
          <SidebarProduct />
        </div>
        <div className='Affiche'>
          <div className="bg-white mt-0 ">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 pt-1">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product._id}>
                    <div className="group relative">
                      {product.length < 0 ? (
                        <h1>Pas De Produit</h1>
                      ) : (
                        <>
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
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.nomproduit}
                              </h3>
                              <p className="text-sm font-medium text-gray-900">{product.descriptionproduit}</p>
                              <p className="text-sm font-medium text-gray-900">{product.tailleproduit}</p>
                              <p className="mt-1 text-sm text-gray-500">{product.prix}DT</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <button onClick={(e) => handleCard(e, product)} className="btn btn-primary">
                      <FaDollyFlatbed />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Principale;
