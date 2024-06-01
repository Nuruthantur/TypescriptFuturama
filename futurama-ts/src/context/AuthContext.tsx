import { PropsWithChildren, createContext, useEffect, useState } from "react";
// import { User } from "../@types/user";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "@firebase/auth";
import Spinner from "../components/spinners/Spinner";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
  getMe: () => void;
  deleteAUser: () => void;
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
  getMe: () => {
    throw new Error("no provider");
  },
  deleteAUser: () => {
    throw new Error("no provider");
  },
  // updateProfile: () => {
  //   throw new Error("no provider");
  // },

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

  //NOTE - Option 1 for sign up
  const signup = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //function returns a promise
        console.log(userCredential.user);
        setDoc(doc(db, "users", userCredential.user.uid), {
          // to set a document under the "users" collection
          //with the user's UID as the document ID.
          date: new Date(),
          displayName: "",
          email: email,
          firstName: "",
          lastName: "",
          bio: "",
          location: "",
          score: 0,
          favorites: [], //The document contains a field named "favorites" initialized as an empty array.
        }).catch((e) => console.log(e));
        setLoading(false);
        navigate("/", { replace: true });
      })
      .catch((e) => console.log(e));
  };

  //NOTE - Option 2 for sign up; worse

  // const signup = (email: string, password: string) => {
  //   setLoading(true);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       console.log(user);
  //       setUser(user);
  //       const newItem = {
  //         user: user?.uid,
  //         date: new Date(),
  //         displayName: "",
  //         email: email,
  //         firstName: "",
  //         lastName: "",
  //         bio: "",
  //         location: "",
  //            score: 0,
  //         favorites: [],
  //       };
  //       setDoc(collection(db, "users"), newItem);
  //       setLoading(false);
  //       navigate("/", { replace: true });
  //     })
  //     .catch((error) => {
  //       const { message } = error as Error;
  //       console.log(message);
  //       setLoading(false);
  //     });
  // };

  const getMe = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.log("No user is currently logged in.");
        return;
      }

      const q = query(collection(db, "users"), where("user", "==", user.uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // console.log("logged in user: ", doc.data());
        return doc.data();
      });
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  const deleteAUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    deleteUser(user)
      .then(() => {
        // User deleted.
        console.log("user deleted");
      })
      .catch((error) => {
        // An error ocurred
        console.log("error deleting user: ", error);
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
        getMe,
        deleteAUser,
        loading,
        toggleTheme,
        toggleThemeHandler: toggleThemeHandler,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
