import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import {
  doc,
  updateDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
  Firestore,
} from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";

//creating context.

const FavouritesContext = createContext({});

//using context and returning it.

// eslint-disable-next-line react-refresh/only-export-components
export function useFavourites() {
  return useContext(FavouritesContext);
}
//creating context provider function to create and manage context and share the data between the components

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);

  //Function to check if the item is already in favs or not.

  function isItemInFavorites(id) {
    return favorites.some((item) => item === id); //return false if item is not in the favourites already.
  }

  //Function to add the item to the favs.
  async function addToFavorites(id: string) {
    if (user.uid) {
      setFavorites([...favorites, id]);
      try {
        const userDocRef = doc(Firestore().collection("users"), user?.uid);
        await updateDoc(userDocRef, {
          favorites: arrayUnion(id),
        });
      } catch (error) {
        console.error("Error adding favorite:", error);
      }
    }
  }

  //   async function addToFavorites(id: string) {
  //     if (user.uid) {
  //       setFavorites([...favorites, id]);
  //       try {
  //         const userDocRef = doc(db, "users", user?.uid);
  //         await updateDoc(userDocRef, {
  //           favorites: arrayUnion(id),
  //         });
  //       } catch (error) {
  //         console.error("Error adding favorite:", error);
  //       }
  //     }
  //   }
  //arrayunion is used to add an item to the existing array. Here it is adding the item with that id to favorites.
  // Function to remove the item from the favs.

  async function removeFromFavorites(id: string) {
    if (!user?.uid) return;
    if (user?.uid) {
      setFavorites((currItems) => {
        return currItems.filter((item) => item !== id); //filter out the items where id is not equal to current id.
      });
      const userDocRef = doc(db, "users", user?.uid);
      try {
        // Use arrayRemove to remove an element from the "favorites" array
        await updateDoc(userDocRef, {
          favorites: arrayRemove(id),
        });
      } catch (error) {
        console.error("Error removing favorite:", error);
      }
    }
  }

  // Function to check toggle and display the heart icon accordingly.

  function toggleFavorite(id: string) {
    if (isItemInFavorites(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  }

  //using useEffect hook to get and keep the data after every render.
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      //on user auth state changed, the next condition is followed.
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const docSnapshot = await getDoc(userDocRef); //retrieves a document snapshot

          if (docSnapshot.exists()) {
            //checking if the document exists in the firestore.
            const userData = docSnapshot.data(); //get the data of the document if it exists in the cache.
            const userFavorites = userData.favorites || []; //access the favorites array from document data.
            //if it doesn't exists then it defaults to empty array.
            setFavorites(userFavorites);
          } else {
            console.log("Document does not exist");
          }
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      }
    });
  }, []);
  return (
    <FavouritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isItemInFavorites,
        removeFromFavorites,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
}
