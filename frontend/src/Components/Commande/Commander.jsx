import React, { useEffect, useState } from 'react'
import Navbaruser from '../NavBar/NavBaruser'
import { useParams } from 'react-router-dom';
const Commander = () => {
    const [products, setProduct] = useState([]);
    const [nombre, setNomber] = useState(5);
    const [valeur, setValeur] = useState(0);
    const [nomproduit, setNomproduit] = useState('');
    const [prix, setPrix] = useState('');
    const [typeproduit, setTypeproduit] = useState('');
    const [tailleproduit, setTailleproduit] = useState('');
    const [email, setEmail] = useState('');
    const [statutsres, setStatutsres] = useState('En Attent');
    const {id}=useParams()
   
    const [userval,setUserval]=useState('')
    useEffect(()=>{
      const token = localStorage.getItem('token');
      setUserval(token)
      console.log(token)
      const  email  = JSON.parse(token);
      setEmail(email);
      console.log(email)
      
    },[])
    useEffect(() => {
      const AfficheProduit = async () => {
        const response = await fetch(`http://localhost:4000/api/user/Produit/${id}`);
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


    //

    const handleAjouter = async (e,product) => {
        e.preventDefault();
        console.log('this is p',product)
        const matriculeproduit=id
        const client=email
        const datas={nomproduit:product.nomproduit,matriculeproduit,prix:product.prix,typeproduit:product.typeproduit,
            tailleproduit:product.tailleproduit,natureproduit:product.natureproduit,nombre:nombre,statutsres:statutsres,
        client:client}
        const response = await fetch('http://localhost:4000/api/User/Reserver', {
          method: 'POST',
          body: JSON.stringify(datas),
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
        }});
    
        const jso = await response.json();
        if (response.ok) {
          alert('ajout réuissit');
          window.location.href='/Client/Reservation'
        } else {
          alert('ajout non réuissit');
        }
      };

    //fonction d'incrimenter la qte
    const handleIncri =async(e,valeur)=>{
        e.preventDefault()
        if(valeur<nombre){
         valeur= valeur+1;
        setValeur(valeur)}else
        {
          setValeur(nombre)
        }
      }

       //fonction d'Decrimenter la qte
      const handleDicri =async(e,valeur)=>{
        e.preventDefault()
        if(valeur>0){
        valeur= valeur-1;
        setValeur(valeur)}else{
          setValeur(0)
        }
      }
  return (
    <>
    <Navbaruser/>
    <div className="card  mb-3 mt-5" >
    <div className="card-header">Commander</div>
    <div className="  text-primary">
    <form>
    {Array.isArray(products)&&products.map((product)=>(
  <div key={product._id}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Nom Du Produit</label>
      <input type="text" className="form-control" id="inputEmail4" name='nomproduit' value={product.nomproduit} disabled />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Prix</label>
      <input type="text" className="form-control" id="inputPassword4" name='prix' value={product.prix} disabled />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Type De Produit</label>
    <input type="text" className="form-control" id="inputAddress"name='typeproduit' value={product.typeproduit} disabled />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2"> Nature Du Produit</label>
    <input type="text" className="form-control" id="inputAddress2" name='typeproduit' value={product.typeproduit} disabled />
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Taille Du Produit</label>
      <select id="inputState" className="form-control">
        <option value="">Choose La Taille</option>
        <option value="s">S</option>
        <option value="l">L</option>
        <option value="m">M</option>
        <option value="xl">XL</option>
      </select>
    </div>

  </div>


  <div class="card">
  <div class="card-body">
  <div>
                <button  onClick={(e)=>handleDicri(e,valeur)}>-</button>
                <input type='text' name='valeur' value={valeur} />
                <button onClick={(e)=>handleIncri(e,valeur)} >+</button>
              </div>
  </div>
  <button type="submit" onClick={(e)=>handleAjouter(e,product)} className="btn btn-primary" >Commander</button>
</div>
  
  </div>))}
</form>
   </div>


  </div>
  </>
  )
}

export default Commander