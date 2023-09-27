import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../../Pages/Landing'
import Signin from '../../Pages/Authentification/Signin'
import SignUp from '../../Pages/Authentification/SignUp'
import Principale from '../../Pages/Shop/Principale'
import Card from '../../Pages/Shop/Card'
import Frip from '../../Client/Frip'
import Personaliser from '../../Client/Personaliser'
import NewProduct from '../../Client/NewProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fouteur from '../Fouteur/Fouteur'
import AjouterProduit from '../../Admin/Product/AjouterProduit'
import AffichierProduit from '../../Admin/Product/AffichierProduit'
import ModifierProduit from '../../Admin/Product/ModifierProduit'
import Profile from '../../Pages/Profile'
import Logout from '../../Pages/Authentification/Logout'
import Commander from '../Commande/Commander'
import Reservation from '../../Client/Reservation'
import ReservationClient from '../../Admin/Product/Reservation/ReservationClient'
import ModifierReservation from '../../Admin/Product/Reservation/ModifierReservation'

const Routess = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [types, setType] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('login');
    setIsLogin(token === 'true');

    const user =localStorage.getItem('type');
          setType(user);
       
  }, []);
  return (
    <>
     {isLogin ? (
        <>
        {types === 'Admin' ?(
          <>
                  {/* Routes Admin  */}
                  <Routes>
        <Route path='/Admin/Produit' element={<AffichierProduit/>}/>
        <Route path='/Admin/AjouterProduit' element={<AjouterProduit/>}/>
        <Route path='/Admin/Product/ModifierProduit/:id' element={<ModifierProduit/>}/>
        <Route path='/Admin/Reservation' element={<ReservationClient/>}/>
        <Route path='/Admin/Reservation/Modifier/:id' element={<ModifierReservation/>}/>
        <Route path='/Admin/Profile' element={<Profile/>}/>
        <Route path='/Logout' element={<Logout/>}/></Routes>
        </> ):(<Routes>
                 {/* Routes Des Utilisateur */}
                 <Route path='/Market' element={<Principale/>}/>
        <Route path={`/Client/Frip`} element={<Frip/>}/>
        <Route path='/Client/Personalisier' element={<Personaliser/>}/>
        <Route path='/Client/Nouveau' element={<NewProduct/>}></Route>
        <Route path='/Client/Card/Commander/:id' element={<Commander/>}/>
        <Route path='/Client/Reservation' element={<Reservation/>}></Route>
        <Route path='/Client/Card/:id' element={<Card/>}/>
        <Route path='/Logout' element={<Logout/>}/>

    </Routes>)}</>) : (  <Routes>
        {/* les Routes */}
        <Route path='/*' element={<Landing/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
       
     
</Routes>
   )}

    </>
  )
}

export default Routess