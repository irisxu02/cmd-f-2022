import React, { Children, useContext, useEffect, useState } from 'react'
// import { auth } from '../firebase'
import { auth, onAuthStateChanged } from '../firebase';
import { getAuth } from 'firebase/auth';

const AuthContext = React.createContext()
// const auth = getAuth(firebaseApp)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children }
    </AuthContext.Provider>
  )
}
