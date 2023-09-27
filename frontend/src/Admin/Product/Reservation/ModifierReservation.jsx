import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBarAdmin from '../../../Components/NavBar/NavBarAdmin';

const ModifierReservation = () => {
    const [nomproduit, setNomproduit] = useState('');
    const [prix, setPrix] = useState('');
    const [typeproduit, setTypeproduit] = useState([]);
    const [tailleproduit, setTailleproduit] = useState('');
    const [nombre, setNombre] = useState('');
  const [statutsres, setStatutsres] = useState('');
  const [client, setClient] = useState('');
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    const fetchReservation = async () => {
      const response = await fetch(`http://localhost:4000/api/admin/GetReservationClient/${id}`);
      const jso = await response.json();
      console.log(jso);
      if (response.ok) {
        jso.map((res) => {
            setNomproduit(res.nomproduit);
            setPrix(res.prix);
            setTypeproduit(res.typeproduit);
            setTailleproduit(res.tailleproduit);
            setNombre(res.nombre);
            setStatutsres(res.statutsres);
            setClient(res.client);
            // N'oubliez pas de renvoyer res dans la fonction map
          });
        setData(jso);
        console.log(jso);
      }
    };

    fetchReservation();
  }, [id]);

  const handleSbmit = async (e) => {
    e.preventDefault();
    const updatedData = {
        nomproduit,
      prix,
      typeproduit,
      tailleproduit,
      nombre,
      statutsres,
     client
    };
 
    const response = await fetch(`http://localhost:4000/api/Admin/ModifierReservationClient/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    });

    if (!response.ok) {
      alert('erreur');
     
    } else {
       
      window.location.href='/Admin/Reservation' }
    
  };

  return (
    <>
      <NavBarAdmin/>
      <div>
        
        <div className="max-w-2xl mx-auto bg-white p-16">
          <form>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom Du Produit</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Numéro"
                  defaultValue={nomproduit}
                 disabled
                />
              </div>
              <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prix</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Armateur"
                  value={prix}
            disabled
                />
              </div>
              <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Taille De Produit</label>
                <input
                  type="text"
               
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Agent Maritime"
                  value={tailleproduit}
               disabled
                />
              </div>
              <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type De Produit</label>
                <input
                  type="text"
                
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Itinéraire"
                  value={typeproduit}
           disabled
                />
              </div>
              <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantité</label>
                <input
                  type="text"
                
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Fréquence De Touchée"
                  value={nombre}
                  disabled
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Statut De Reservation</label>
             <select value={statutsres} onChange={(e)=>setStatutsres(e.target.value)}>
                <option value="">Choisie Le Statut</option>
                <option value="au cour de livrison">Au Cour De Livrison</option>
                <option value="en attent">En Attent</option>

             </select>
              </div>
            </div>
            <button
              type="submit"
              onClick={(e)=>handleSbmit(e)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
           
          </form>
        </div>
      </div> 
     
    </>
  );
};

export default ModifierReservation