import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const twitterProvider =  new TwitterAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const facebookLogIn = ()=>{
        setLoading(true);
        return signInWithPopup (auth, facebookProvider);
    }
    const twitterLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, twitterProvider)
    }

    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, curruentUser => {
            setUser(curruentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        facebookLogIn,
        googleLogIn,
        twitterLogIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;