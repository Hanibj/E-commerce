import React, { useEffect, useState } from 'react';
import './css/Style.css';
import NavBarAdmin from '../../Components/NavBar/NavBarAdmin';
import { useParams } from 'react-router-dom';

const ModifierProduit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [formData, setFormData] = useState({
    nomproduit: '',
    descriptionproduit: '',
    prix: '',
    sexe: '',
    typeproduit: '',
    natureproduit:'',
    tailleproduit: [],
    imageproduit: null, // Mettez imageproduit comme un objet vide au départ
  });

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      imageproduit: file, // Mettez à jour l'objet imageproduit dans formData
    });
  };

  const handleModifier = async (e) => {
    e.preventDefault();
    const updatedProduct = { ...product[0], ...formData };

    // Créez un objet FormData pour envoyer les données, y compris l'image
    const formDataToSend = new FormData();
    formDataToSend.append('nomproduit', updatedProduct.nomproduit);
    formDataToSend.append('descriptionproduit', updatedProduct.descriptionproduit);
    formDataToSend.append('prix', updatedProduct.prix);
    formDataToSend.append('sexe', updatedProduct.sexe);
    formDataToSend.append('typeproduit', updatedProduct.typeproduit);
    formDataToSend.append('tailleproduit', JSON.stringify(updatedProduct.tailleproduit));
    formDataToSend.append('natureproduit', JSON.stringify(updatedProduct.natureproduit));
    formDataToSend.append('imageproduit', updatedProduct.imageproduit); // Ajoutez l'image ici

    const response = await fetch(`http://localhost:4000/api/Admin/ModifierProduit/${id}`, {
      method: 'PATCH',
      body: formDataToSend, // Utilisez formDataToSend pour envoyer les données
    });

    const jso = await response.json();
    if (response.ok) {
      alert('Modification réussie');
      window.location.href='/Admin/Produit'
    } else {
      alert('Modification non réussie');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     imageproduit: file,
  //   });
  // };

  return (
    <>
      <NavBarAdmin />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Modifier Un Produit
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            {product.map((p) => (
              <div key={p._id}>
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
                      placeholder={p.nomproduit}
                      required
                      value={formData.nomproduit}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="descriptionproduit" className="block text-sm font-medium leading-6 text-gray-900">
                    Description Du Produit <b>*</b>
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="descriptionproduit"
                      name="descriptionproduit"
                      cols={50}
                      rows={5}
                      autoComplete="descriptionproduit"
                      placeholder={p.descriptionproduit}
                      required
                      value={formData.descriptionproduit}
                      onChange={handleInputChange}
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
                      type="number"
                      autoComplete="prix"
                      placeholder={p.prix}
                      required
                      value={formData.prix}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="imageproduit" className="block text-sm font-medium leading-6 text-gray-900">
                    Image Du Produit <b>*</b>
                  </label>
                  <div className="mt-2">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={`http://localhost:4000/${p.imageproduit}`}
                        alt="Phot du produit"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    {/* <input
                      placeholder="Image Du Produit"
                      className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="imageproduit"
                      onChange={handleImageChange}
                      id="imageproduit"
                      type="file"
                      accept="image/*"
                    /> */}
                            <input
            placeholder='Image Du Produit'
            className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name='imageproduit'
            onChange={handleImageChange}
            id="imageproduit"
            type="file"
            accept="image/*"
          />
                  </div>
                </div>
                <div>
                  <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
                    Sexe <b>*</b>
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-blue-600"
                        name="sexe"
                        value="Homme"
                        checked={formData.sexe === 'Homme'}
                        onChange={handleInputChange}
                      />
                      <span className="ml-2 text-gray-700">Homme</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-blue-600"
                        name="sexe"
                        value="Femme"
                        checked={formData.sexe === 'Femme'}
                        onChange={handleInputChange}
                      />
                      <span className="ml-2 text-gray-700">Femme</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="typeproduit" className="block text-sm font-medium leading-6 text-gray-900">
                    Type Du Produit <b>*</b>
                  </label>
                  <div className="mt-2">
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="typeproduit"
                      value={formData.typeproduit}
                      onChange={handleInputChange}
                    >
                      <option value="">Choisir Le Type Du Produit</option>
                      <option value="tshirt">T-shirt</option>
                      <option value="pulls">Pulls</option>
                      <option value="jeans">Jeans</option>
                      <option value="shorts">Shorts</option>
                      <option value="pantallons">Pantallons</option>
                      <option value="chaussures">Chaussures</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="natureproduit" className="block text-sm font-medium leading-6 text-gray-900">
                  Nature Du Produit <b>*</b>
                  </label>
                  <div className="mt-2">
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="natureproduit"
                      value={formData.natureproduit}
                      onChange={handleInputChange}
                    >
                      <option value="">Choisir La Nature Du Produit</option>
                      <option value="frip">Frip</option>
                      <option value="new">New Produit</option>
                      <option value="personalisier">Personalisier</option>

                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="tailleproduit" className="block text-sm font-medium leading-6 text-gray-900">
                    Taille Du Produit <b>*</b>
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        name="tailleproduit"
                        value="S"
                        checked={formData.tailleproduit.includes('S')}
                        onChange={handleInputChange}
                      />
                      <span className="ml-2 text-gray-700">S</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        name="tailleproduit"
                        value="M"
                        checked={formData.tailleproduit.includes('M')}
                        onChange={handleInputChange}
                      />
                      <span className="ml-2 text-gray-700">M</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        name="tailleproduit"
                        value="L"
                        checked={formData.tailleproduit.includes('L')}
                        onChange={handleInputChange}
                      />
                      <span className="ml-2 text-gray-700">L</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        name="tailleproduit"
                        value="XL"
                        checked={formData.tailleproduit.includes('XL')}
                        onChange={handleInputChange}
                      />
                      <span className="ml-2 text-gray-700">XL</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleModifier}
              >
                Modifier
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModifierProduit;
