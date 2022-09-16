import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ0fWRr2MprS9b7J97PgB-1gw9dDvvu00",
  authDomain: "house-marketplace-app-662f8.firebaseapp.com",
  projectId: "house-marketplace-app-662f8",
  storageBucket: "house-marketplace-app-662f8.appspot.com",
  messagingSenderId: "177395157845",
  appId: "1:177395157845:web:3565ec4b56b358f55cbddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()