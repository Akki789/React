import React, { useState } from 'react'
import { AuthContext } from './AuthContext';

export default function AuthProvider({children}) {

    let [user, setUser] = useState(null);

    function login(username){
        setUser({name: username})
    }

    function logout(){
        setUser(null)
    }

  return (
    <div>
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
