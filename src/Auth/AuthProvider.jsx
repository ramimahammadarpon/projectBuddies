import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  const logout = () => {
    return signOut(auth);
  };

  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const update = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const googleSignup = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(user) => {

        if(user){
          await user.reload();
          const refreshedUser = auth.currentUser

          setUser({
            uid: refreshedUser.uid,
            email: refreshedUser.email,
            displayName: refreshedUser.displayName,
            photoURL: refreshedUser.photoURL
          });
        }
        else{
          setUser(null);
        }
        setLoading(false);
  });

    return () => unsubscribe();
  }, []);

  const value = {
    signUpWithEmail,
    googleSignup,
    update,
    login,
    logout,
    user,
    setUser,
    loading,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
