import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChk8GbPx2osHfIEOdN19J5O3uGN6-ltDg",
  authDomain: "petsite-bd39a.firebaseapp.com",
  databaseURL: "https://petsite-bd39a.firebaseio.com",
  projectId: "petsite-bd39a",
  storageBucket: "petsite-bd39a.firebasestorage.app",
  messagingSenderId: "295821539839",
  appId: "1:295821539839:web:03b2aede5b7303bffb8fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app, "banco");

// Configurar a persistência de sessão: 
// browserSessionPersistence: Limpa quando a janela/aba é fechada.
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Firebase persistence set to session only.");
  })
  .catch((error) => {
    console.error("Error setting Firebase persistence:", error);
  });
