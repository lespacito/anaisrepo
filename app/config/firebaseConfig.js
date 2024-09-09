import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCYht-h5eG8uXwhc6h91V6kOuC9CEsk28M",
  authDomain: "anaisproject-ff941.firebaseapp.com",
  projectId: "anaisproject-ff941",
  storageBucket: "anaisproject-ff941.appspot.com",
  messagingSenderId: "16982453024",
  appId: "1:16982453024:web:707815192638eec0104545",
  measurementId: "G-6XLYR1BHNV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
