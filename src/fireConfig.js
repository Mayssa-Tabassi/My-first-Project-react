import { initializeApp } from "firebase/app"; 

import { getFirestore } from "firebase/firestore"; 

import { getAuth } from "firebase/auth"; 

 

const firebaseConfig = { 
    apiKey: "AIzaSyBxwQoCtYwX3KdMHaBfgLazrMT3DjmHt_s",
    authDomain: "projetreact-6d976.firebaseapp.com",
    projectId: "projetreact-6d976",
    storageBucket: "projetreact-6d976.appspot.com",
    messagingSenderId: "152562806852",
    appId: "1:152562806852:web:2c23404207653d73434c11"
}; 

 

const app = initializeApp(firebaseConfig); 

const db = getFirestore(app); 

export const auth = getAuth(app) 

export default db; 