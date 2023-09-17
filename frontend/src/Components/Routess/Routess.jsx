import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../../Pages/Landing'
import Signin from '../../Pages/Authentification/Signin'
import SignUp from '../../Pages/Authentification/SignUp'
import Principale from '../../Pages/Shop/Principale'
import Card from '../../Pages/Shop/Card'


const Routess = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/Market' element={<Principale/>}/>
        <Route path='/Card' element={<Card/>}/>
    </Routes>
    </>
  )
}

export default Routess