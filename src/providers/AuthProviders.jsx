/* eslint-disable react/prop-types */
import {  createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import axios from 'axios'
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user)
    // create user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,  password)
    }
    // password Login'
    const passwordLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google login
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github Login
	const githubProvider = new GithubAuthProvider()
	const githubLogin = ()=>{
        setLoading(true)
		return signInWithPopup(auth, githubProvider)
	}
    // log Out
    const logOut = ()=>{
        setUser(null)
        return signOut(auth)
    }
    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
                setLoading(false)
            }
            return unsubscribe()
        })}, [])
    // Update
    const update = (name, photo)=>{
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            setUser({
                displayName: name,
                photoURL: photo
            })
        })
    }



    


    const authInfo = {
        auth,
        createUser,
        passwordLogin,
        googleLogin,
        githubLogin,
        user,
        logOut,
        loading,
        setLoading,
        update,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;