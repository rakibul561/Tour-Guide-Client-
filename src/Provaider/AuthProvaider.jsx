import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvaider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //    crate user

    const crateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //   sign in 

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        crateUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;