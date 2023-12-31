import { useState } from "react";
import Navbarr from "../../Components/NavBar/Navbarr";
import imedStor from '../../image/imedStor.jpg'
const Signin=()=> {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  const HandleSignin=async (e)=>{
e.preventDefault()
console.log(email, 'passs',password);
    const response =await fetch('http://localhost:4000/api/Authentification/Signin',{
      method:'POST',
      body: JSON.stringify({email,password}),
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
    const jso=await response.json()
    console.log(jso.typeuser);
    if(response.ok){
      alert('connexion réuissit')

      
      if(jso.typeuser==="Admin"){
        localStorage.setItem('token', JSON.stringify(jso.email));
        localStorage.setItem('type', JSON.stringify(jso.typeuser));
        localStorage.setItem('login', JSON.stringify(true));
         window.location.href="/Admin/Produit"
       
      }
      else {
        localStorage.setItem('token', JSON.stringify(jso.email));
        localStorage.setItem('type', JSON.stringify(jso.typeuser));
        localStorage.setItem('login', JSON.stringify(true));
    window.location.href="/Client/Frip"
      }
    }
    else{
      alert('connexion echoué')
    }
  }
    return (
      <>
      <Navbarr/>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-12 w-12 w-auto"
              src={imedStor}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e)=>HandleSignin(e)}
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  export default Signin

