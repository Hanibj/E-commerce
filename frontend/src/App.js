import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Landing from './Pages/Landing'
import Routess from './Components/Routess/Routess'
const App = () => {
  return (
    <BrowserRouter>
    <Routess/>
    </BrowserRouter>
  )
}

export default App