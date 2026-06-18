'use client'
import React, { createContext, useEffect, useState } from 'react'
export const authContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    useEffect(()=>{

    }, [])
  return (
    <authContext.Provider value={{user, setUser}}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
