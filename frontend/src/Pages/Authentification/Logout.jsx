import React, { useEffect } from 'react'

const Logout = () => {
    useEffect(()=>{
    
   
          window.localStorage.clear()
          window.location.href='/'
        
       
    },[])
  return (
    <div>Logout</div>
  )
}

export default Logout