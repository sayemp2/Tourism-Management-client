import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGit = () => {
        setLoader(true)
        return signInWithPopup(auth, gitProvider)

    }

    const signInGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)

    }

    const UpdateProfile = (name, photo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {
        const unSunscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoader(false)
        })
        return () => {
            unSunscribe();
        }
    }, [])

    const logOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }

    const authInfo = { user, signUp, loader, setLoader, UpdateProfile, logOutUser, signIn, signInGit, signInGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;