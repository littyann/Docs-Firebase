import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  //Your config data
  apiKey: "AIzaSyAB9v1rdNVbtaZiFQ60ysleOCIrit03wzs",
  authDomain: "docs-db-c551b.firebaseapp.com",
  projectId: "docs-db-c551b",
  storageBucket: "docs-db-c551b.appspot.com",
  messagingSenderId: "71429298459",
  appId: "1:71429298459:web:08336144a0ed531db41bbe",
  measurementId: "G-KB0MR3RWNW"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

