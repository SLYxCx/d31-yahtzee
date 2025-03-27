"use client";

import { useContext, createContext, useState, useEffect } from "react";
import auth from "@react-native-firebase/auth"; // Import auth from RNFirebase

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password); // use the RNFirebase auth
  };

  const logIn = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password); // use the RNFirebase auth
  };

  const firebaseSignOut = () => {
    return auth().signOut(); // use the RNFirebase auth
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((currentUser) => { // use the RNFirebase auth
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};