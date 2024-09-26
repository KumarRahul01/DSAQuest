import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB21eQ17p0LvH_tG4Ol3Z5iII5BEs7dliY",
  authDomain: "dsa-quest-ef17e.firebaseapp.com",
  projectId: "dsa-quest-ef17e",
  storageBucket: "dsa-quest-ef17e.appspot.com",
  messagingSenderId: "1408593308",
  appId: "1:1408593308:web:859d94842e896d1e96ac59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);

export {app, auth, db};