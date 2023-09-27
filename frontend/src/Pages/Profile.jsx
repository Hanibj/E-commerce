import { PaperClipIcon } from '@heroicons/react/20/solid'
import NavbarUser from '../Components/NavBar/NavBaruser'
import { useEffect, useState } from 'react'

const Profile=()=> {
  const [email,setEmail]=useState('')
  const [userval,setUserval]=useState('')
  const [user,setUser]=useState([])
  useEffect(()=>{
    const token = localStorage.getItem('token');
    setUserval(token)
    console.log(token)
    const  email  = JSON.parse(token);
    setEmail(email);
    console.log(email)
    
  },[])
  useEffect(()=>{
    const affadmin = async () => {
      const response = await fetch(`http://localhost:4000/api/Authentification/Profile/${email}`);
      const jso = await response.json();
console.log(jso.data)
  if (response.ok) {
    setUser(jso.data);
    
  }
}; 

affadmin(); 
 },[email])
  return (
    <div>
        <NavbarUser/>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {user &&
        user.map((users,index) => (
          <div key={users._id}>
       
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
                className="mx-auto h-40 w-40 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Profile
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                Email address
              </label>

              <div className="mt-2">
              <div className="block w-full rounded-md py-1.5 text-lg text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 ">
  {users.email}
</div>

              </div>
            </div>
            <div>
              <label htmlFor="nom" className="block text-lg font-medium leading-6 text-gray-900">
                Nom
              </label>
              <div className="mt-2">
                <div
                  
                  className="block w-full rounded-md py-1.5 text-lg text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 "
                >{users.nom}</div>
              </div>
            </div>
            <div>
              <label htmlFor="prenom" className="block text-lg font-medium leading-6 text-gray-900">
                Prenom
              </label>
              <div className="mt-2">
              <div
                  
                  className="block w-full rounded-md py-1.5 text-lg text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 "
                >{users.prenom}</div>
              </div>
            </div>
            <div>
              <label htmlFor="societe" className="block text-lg font-medium leading-6 text-gray-900">
                Date De Naissace
              </label>
              <div className="mt-2">
              <div
                  
                  className="block w-full rounded-md py-1.5 text-lg text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 " >{users.datenaiss}</div>
              </div>
            </div>
            <div>
              <label htmlFor="societe" className="block text-lg font-medium leading-6 text-gray-900">
                Téléphone
              </label>
              <div className="mt-2">
              <div
                  
                  className="block w-full rounded-md py-1.5 text-lg text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 " >{users.tel}</div>
              </div>
            </div>
     
            

          
          </form>

 
        </div>
        </div>
        ))}
        </div>
    </div>
  )
}


export default Profile