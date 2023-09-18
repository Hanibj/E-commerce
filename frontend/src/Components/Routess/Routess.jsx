import React from 'react'
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

const Routess = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/Market' element={<Principale/>}/>
        <Route path='/Card' element={<Card/>}/>
        <Route path='/Admin/AjouterProduit' element={<AjouterProduit/>}/>
        <Route path='/Client/Frip' element={<Frip/>}/>
        <Route path='/Client/Personalisier' element={<Personaliser/>}/>
        <Route path='/Client/Nouveau' element={<NewProduct/>}></Route>
    </Routes>

    </>
  )
}

export default Routess