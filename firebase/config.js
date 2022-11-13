import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDJN_lZSSBw1UbCvkU8y3yiF579W5nolE",
  authDomain: "chmsu-emergency.firebaseapp.com",
  projectId: "chmsu-emergency",
  storageBucket: "chmsu-emergency.appspot.com",
  messagingSenderId: "482948951440",
  appId: "1:482948951440:web:274b9fbcb1c07af5211715",
  measurementId: "G-VZB7CR2XWZ",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export { auth, db, storage };
