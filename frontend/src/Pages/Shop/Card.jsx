
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import NavBaruser from '../../Components/NavBar/NavBaruser'
import { useParams } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Card() {

  const [products, setProduct] = useState([]);
  const {id}=useParams()
  useEffect(() => {
    const AfficheProduit = async () => {
      const response = await fetch(`http://localhost:4000/api/Admin/Produit/${id}`);
      const jso = await response.json();
      if (!response.ok) {
        console.log('erreur de récupération des produits');
      } else {
        console.log(jso);
        console.log('récupération établie');
        setProduct(jso);
      }
    };
    AfficheProduit();
  }, [id]);
  const handlePayer =async(e,product)=>{
    e.preventDefault()
    window.location.href=`/Client/Card/Commander/${product._id}`
  }
  return (
    <>
    <NavBaruser/>
    <div className="bg-white">
      <div className="pt-6">

{Array.isArray(products)&&products.map((product)=>(
  <div key={product._id}>
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
     
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={`http://localhost:4000/${product.imageproduit}`}
              alt='imageProduit'
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.nomproduit}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
           


            <form className="mt-10">


              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
              
                    {product.tailleproduit}
                  
                </div>

                
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             
             onClick={(e)=>handlePayer(e,product)}>
                Commander
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 >Description</h3>

              <div className="space-y-6">
        
                <p className="text-base text-gray-900">{product.descriptionproduit}</p>
              </div>
            </div>


            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Prix</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.prix}DT</p>
              </div>
            </div>
          </div>
        </div>
   </div>
   ))}
    </div>
    </div>
    </>
  )
}
