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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
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
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
