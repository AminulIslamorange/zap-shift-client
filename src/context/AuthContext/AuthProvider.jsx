
import { useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoadin]=useState(true);

    const createUser=(email,password)=>{
        setLoadin(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoadin(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoadin(true);
        return signInWithPopup(auth,googleProvider)
    }
    const logOut=()=>{
        setLoadin(true)
        return signOut(auth)
    }


    useEffect(()=>{
      const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoadin(false);

        })
        return ()=>{
            unSubscribe();
        }
    },[])



    const authInfo={user,createUser,signInUser,signInWithGoogle,loading,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;