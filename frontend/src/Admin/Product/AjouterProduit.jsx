
import React, { useState } from 'react'

import './css/Style.css'
import NavBarAdmin from '../../Components/NavBar/NavBarAdmin'
const AjouterProduit = () => {
  const [nomproduit, setNomproduit] = useState('');
  const [descriptionproduit, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [imageproduit, setImageproduit] = useState(null); // Use null to represent the file
  const [sexe, setSexe] = useState('');
  const [typeproduit, setTypeproduit] = useState([]);
  const [tailleproduit, setTailleproduit] = useState('');
  const [natureproduit, setNatureproduit] = useState('');
const [nombre,setNombre]=useState('')
  const handleAjouter = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append('nomproduit', nomproduit);
    formData.append('descriptionproduit', descriptionproduit);
    formData.append('prix', prix);
    formData.append('sexe', sexe);
    formData.append('typeproduit', typeproduit);
    formData.append('tailleproduit', tailleproduit);
    formData.append('natureproduit', natureproduit);
    formData.append('nombre', nombre);
    formData.append('imageproduit', imageproduit); // Append the file

    const response = await fetch('http://localhost:4000/api/Admin/AjouterProdui', {
      method: 'POST',
      body: formData, // Send the FormData object
    });

    const jso = await response.json();
    if (response.ok) {
      alert('ajout réuissit');
      window.location.href='/Admin/Produit'
    } else {
      alert('ajout non réuissit');
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setImageproduit(file);
  };
  const handleTailleProduitChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      // Si la case à cocher est cochée, ajoutez la valeur à la liste
      setTailleproduit([...tailleproduit, value]);
    } else {
      // Si la case à cocher est décochée, retirez la valeur de la liste
      setTailleproduit(tailleproduit.filter((item) => item !== value));
    }
  };


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
          <form className="space-y-6" >
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
                  onChange={(e) => setNomproduit(e.target.value)}
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
                  onChange={(e) => setDescription(e.target.value)}
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
                  onChange={(e) => setPrix(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="qte" className="block text-sm font-medium leading-6 text-gray-900">
                Quantité En Stock <b>*</b>
              </label>
              <div className="mt-2">
                <input
                  id="qte"
                  name="nombre"
                  type='number'
                  autoComplete="nombre"
                  placeholder='Quantité En Stock'
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* <div>
              <label htmlFor="imageproduit" className="block text-sm font-medium leading-6 text-gray-900">
                Image Du Prouit <b>*</b>
              </label>
              <div className="mt-2">
                <input 
                placeholder='Image Du Produit'
                class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                name='imageproduit'
                onChange={(e)=>setImageproduit(e.target.value)} id="imageproduit" type="file" multiple />

              </div>
            </div> */}
            <div>
              <label htmlFor="imageproduit" className="block text-sm font-medium leading-6 text-gray-900">
                Image Du Produit <b>*</b>
              </label>
              <div className="mt-2">
                <input
                  placeholder='Image Du Produit'
                  className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name='imageproduit'
                  onChange={handleFileChange} // Use onChange for file input
                  id="imageproduit"
                  type="file"
                  accept="image/*" // Add this to accept image files
                multiple
                />
              </div>
            </div>
            <div>   <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
              Sexe <b>*</b>
            </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={(e) => setSexe(e.target.value)} name='sexe' value='Homme' />
                <span className="ml-2 text-gray-700"> Homme</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={(e) => setSexe(e.target.value)}
                  name='sexe' value='femme' />
                <span className="ml-2 text-gray-700">Femme</span>
              </label>
            </div>
            <div>
              <label htmlFor="typeproduit" className="block text-sm font-medium leading-6 text-gray-900">
                Type Du Produit <b>*</b>
              </label>
              <div className="mt-2">

                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setTypeproduit(e.target.value)}
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
              <label htmlFor="natureproduit" className="block text-sm font-medium leading-6 text-gray-900">
                Type Du Produit <b>*</b>
              </label>
              <div className="mt-2">

                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setNatureproduit(e.target.value)}
                  name='natureproduit'>
                  <option value=''>Choisir Le Type Du Produit</option>
                  <option value="frip">Frip</option>
                      <option value="new">New Produit</option>
                      <option value="personalisier">Personalisier</option>

                </select>
              </div>
            </div>
            {/* <div>
              <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
                Taille Du Produit <b>*</b>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" onChange={(e) => setTailleproduit(e.target.value)} name='tailleproduit' value='s' />
                <span class="ml-2 text-gray-700"> S</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" onChange={(e) => setTailleproduit(e.target.value)} name='tailleproduit' value='m' />
                <span class="ml-2 text-gray-700">M</span>
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" onChange={(e) => setTailleproduit(e.target.value)} name='tailleproduit' value='l' />
                <span class="ml-2 text-gray-700"> L</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" onChange={(e) => setTailleproduit(e.target.value)} name='tailleproduit' value='xl' />
                <span class="ml-2 text-gray-700">XL</span>
              </label>
            </div> */}
                  <div>
        <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
          Taille Du Produit <b>*</b>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleTailleProduitChange} name="tailleproduit" value="s" />
          <span className="ml-2 text-gray-700">S</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleTailleProduitChange} name="tailleproduit" value="m" />
          <span className="ml-2 text-gray-700">M</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleTailleProduitChange} name="tailleproduit" value="l" />
          <span className="ml-2 text-gray-700">L</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={handleTailleProduitChange} name="tailleproduit" value="xl" />
          <span className="ml-2 text-gray-700">XL</span>
        </label>
      </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e) => handleAjouter(e)}
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