import React, { useState } from 'react'
import Navbarr from '../../Components/NavBar/Navbarr'

const SignUp = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [datenaiss,setDatenaiss]=useState('')
  const [tel,setTel]=useState('')
  const [typeuser,setTypeuser]=useState('Client')
  const HandleSignUp=async (e)=>{
    e.preventDefault()
        const response =await fetch('http://localhost:4000/api/Authentification/SignUp',{
    
        method:'POST',
        body: JSON.stringify({nom,prenom,datenaiss,email,tel,password,typeuser}),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
         })
        const jso=await response.json()
        if(response.ok){
          alert('connexion réuissit')
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
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Créer Votre Compte
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium leading-6 text-gray-900">
                    Nom
                  </label>
                  <div className="mt-2">
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      autoComplete="nom"
                      required
                      onChange={(e)=>setNom(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium leading-6 text-gray-900">
                    Prenom
                  </label>
                  <div className="mt-2">
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      autoComplete="prenom"
                      required
                      onChange={(e)=>setPrenom(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="datenaiss" className="block text-sm font-medium leading-6 text-gray-900">
                    Date De Naissance
                  </label>
                  <div className="mt-2">
                    <input
                      id="datenaiss"
                      name="datenaiss"
                      type='date'
                      autoComplete="datenaiss"
                      required
                      onChange={(e)=>setDatenaiss(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
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
                  <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">
                    Télèphone
                  </label>
                  <div className="mt-2">
                    <input
                      id="tel"
                      name="tel"
                      type='tel'
                      autoComplete="tel"
                      required
                      onChange={(e)=>setTel(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
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
                 onClick={(e)=>HandleSignUp(e)}
                 >
                      Créer Votre Compte
                  </button>
                </div>
              </form>
   
            </div>
          </div>
        </>
      )
}

export default SignUp