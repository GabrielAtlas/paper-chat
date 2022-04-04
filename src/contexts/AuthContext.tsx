import Router from "next/router";
import { createContext, useState, useEffect } from "react";

import { setToken, removeToken } from "../libs/cookies";

import firebase from "../libs/firebase";

export interface IAuthUser {
  displayName: string | null;
  email: string | null;
  picture: string | null;
}

interface IAuthContext {
  user: IAuthUser;
  loading: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({} as IAuthUser);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      let result = await firebase.auth().signInWithPopup(provider);

      if (result) {
        const { displayName, email, photoURL: picture } = result.user!;

        const contextUser = { displayName, email, picture } as IAuthUser;

        setUser(contextUser);

        const credential = result.credential as firebase.auth.OAuthCredential;
        const token = credential.idToken!;

        setToken(token);

        Router.push("/chat");
      }
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    try {
      removeToken();
      Router.push("/");
      await firebase.auth().signOut();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL: picture } = user;

        const contextUser = { displayName, email, picture } as IAuthUser;

        setUser(contextUser);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
