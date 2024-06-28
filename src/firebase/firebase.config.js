// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB32HuHBCK2rrC39pXFZYrGIjfRoVuhkWg",
  authDomain: "coffee-store-project-f1d07.firebaseapp.com",
  projectId: "coffee-store-project-f1d07",
  storageBucket: "coffee-store-project-f1d07.appspot.com",
  messagingSenderId: "985159442297",
  appId: "1:985159442297:web:a297945d092cf765c699a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;