import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 
        apiKey: "AIzaSyBQxope8btI85_4461ytAi8m0xcmynT3_A",
        authDomain: "todo-faae5.firebaseapp.com",
        projectId: "todo-faae5",
        storageBucket: "todo-faae5.appspot.com",
        messagingSenderId: "36819452310",
        appId: "1:36819452310:web:eea7408ccf591eba4f1db7"
      };

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };