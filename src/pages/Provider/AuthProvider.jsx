import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth(app)
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)

const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   
}

const signinPassword = (email, password) =>{
    setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
}

const signIngoogle = () =>{
    return signInWithPopup(auth, provider)
}

const gitHubSignIn = () =>{
    return signInWithPopup(auth, gitHubProvider)
}

 useEffect(()=>{
  const unsubscrive =  onAuthStateChanged(auth, loggeduser =>{
      console.log('logged in user inside auth state observer', loggeduser)
      setUser(loggeduser)
      setLoading(false)
    })
    return () => {
        unsubscrive()
    }
},[])


const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

const update = (createUser,name,photo) =>{
    return updateProfile(createUser,{
        displayName: name,
        PhotoURL: photo
    })
}

    const authInfo ={
        user,
        loading,
        createUser,
        signinPassword,
        signIngoogle,
        gitHubSignIn,
        logOut,
        update
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;