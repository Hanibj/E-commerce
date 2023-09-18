
import React from 'react'

import './css/Style.css'
import NavBarAdmin from '../../Components/NavBar/NavBarAdmin'
const AjouterProduit = () => {
  return (
    <>
      <NavBarAdmin />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ajouter Un Nouveau Produit
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="nomproduit" className="block text-sm font-medium leading-6 text-gray-900">
                Nom <b>*</b>
              </label>
              <div className="mt-2">
                <input
                  id="nomproduit"
                  name="nomproduit"
                  type="text"
                  autoComplete="nomproduit"
                  placeholder='Nom Du Produit'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description Du Produit <b>*</b>
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  cols={50}
                  rows={5}
                  autoComplete="description"
                  placeholder='Description Du Produit'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="prix" className="block text-sm font-medium leading-6 text-gray-900">
                Prix <b>*</b>
              </label>
              <div className="mt-2">
                <input
                  id="prix"
                  name="prix"
                  type='number'
                  autoComplete="prix"
                  placeholder='Prix Du Produit'
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Image Du Prouit <b>*</b>
              </label>
              <div className="mt-2">
                <input 
                placeholder='Image Du Produit'
                class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name='imageproduit' id="default_size" type="file" multiple />

              </div>
            </div>
            <div>   <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
              Sexe <b>*</b>
            </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" name='sexe' value='Homme' />
                <span class="ml-2 text-gray-700"> Homme</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" name='sexe' value='femme' />
                <span class="ml-2 text-gray-700">Femme</span>
              </label>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Type Du Produit <b>*</b>
              </label>
              <div className="mt-2">

                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name='typeproduit'>
                  <option value=''>Choisir Le Type Du Produit</option>
                  <option value='tshirt'>T-shirt</option>
                  <option value='pulls'>Pulls</option>
                  <option value='jeans'>Jeans</option>
                  <option value='shorts'>Shorts</option>
                  <option value='pantallons'>Pantallons</option>
                  <option value='chaussures'>Chaussures</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
                Taille Du Produit <b>*</b>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" name='sexe' value='s' />
                <span class="ml-2 text-gray-700"> S</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" name='sexe' value='m' />
                <span class="ml-2 text-gray-700">M</span>
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" name='sexe' value='l' />
                <span class="ml-2 text-gray-700"> L</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" name='sexe' value='xl' />
                <span class="ml-2 text-gray-700">XL</span>
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ajouter
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default AjouterProduit