import { PropsWithChildren, createContext, useEffect, useState } from "react";
// import { User } from "../@types/user";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "@firebase/auth";
import { auth } from "../firebase";
import Spinner from "../components/spinners/Spinner";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
  loading: boolean;
}

const defaultValue: AuthContextType = {
  user: null,
  login: () => {
    throw new Error("no provider");
  },
  logout: () => {
    throw new Error("no provider");
  },
  signup: () => {
    throw new Error("no provider");
  },
  loading: false,
};

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        setLoading(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const { message } = error as Error;
        console.log(message);
        setLoading(false);
      });
  };

  const login = (email: string, password: string) => {
    if (user) navigate("/");
    if (!user) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setUser(user);
          setLoading(false);
          navigate("/", { replace: true });
        })

        .catch((error) => {
          const { message } = error as Error;
          console.log(message);
          setLoading(false);
        });
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        console.log("User successfully logged out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    const getActiveUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          // const uid = user.uid;
          setUser(user);
        } else {
          setUser(null);
          console.log("user is logged out");
        }
        setLoading(false);
      });
    };
    getActiveUser();
  }, []);

  if (loading == true)
    return (
      <>
        <Spinner />
      </>
    );

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
