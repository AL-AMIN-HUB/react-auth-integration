import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
import { useEffect } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("inside state change", user);
        setUser(user);
      }
    });
  }, [auth]);

  return {
    user,
    error,
    signInGoogle,
  };
};
export default useFirebase;
