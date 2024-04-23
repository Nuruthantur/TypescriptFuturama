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
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
  // updateProfile: (
  //   firstName: string,
  //   lastName: string,
  //   bio: string,
  //   location: string
  // ) => void;
  loading: boolean;
  toggleTheme: string;
  toggleThemeHandler: () => void;
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
  toggleTheme: "",
  toggleThemeHandler: () => {
    throw new Error("no provider");
  },
};

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // const auth = getAuth();
  const [toggleTheme, setToggleTheme] = useState<string>("light");

  const toggleThemeHandler = () => {
    setToggleTheme(toggleTheme === "light" ? "dark" : "light");
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

  const signup = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        const newItem = {
          user: user?.uid,
          date: new Date(),
          firstName: "",
          lastName: "",
          bio: "",
          location: "",
          id: "",
        };
        addDoc(collection(db, "users"), newItem);
        setLoading(false);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const { message } = error as Error;
        console.log(message);
        setLoading(false);
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
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,

        loading,
        toggleTheme,
        toggleThemeHandler: toggleThemeHandler,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
