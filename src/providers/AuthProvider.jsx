/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
       })
    },[])
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;