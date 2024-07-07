import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDUb6NM-4CHSpvCgjN7LtaVtmgnyZ95fts",
  
    authDomain: "la-tiendita-de-casanova.firebaseapp.com",
  
    projectId: "la-tiendita-de-casanova",
  
    storageBucket: "la-tiendita-de-casanova.appspot.com",
  
    messagingSenderId: "1085684607377",
  
    appId: "1:1085684607377:web:5121e30a7397b05af01230"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//   productos.forEach((prod) => {
//     addDoc(collection(db, "productos"), prod)
//       .then((elem) => console.log(`se agregó el producto id ${elem.id}`))
//       .catch((error) => console.log(error));
//   });