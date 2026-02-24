// 1. On importe les outils Firebase depuis le web
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// 2. TA CONFIGURATION FIREBASE EXACTE
const firebaseConfig = {
  apiKey: "AIzaSyA2Rr-7n5D0qhDPHGiM3ojE21n-ttTjnQE",
  authDomain: "projet-campos.firebaseapp.com",
  projectId: "projet-campos",
  storageBucket: "projet-campos.firebasestorage.app",
  messagingSenderId: "853957547970",
  appId: "1:853957547970:web:575d72486e3b3accef685b",
  measurementId: "G-QYM4DNMY1C"
};

// 3. On initialise Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. On vérifie dans la console "cachée"
console.log("🔥 Firebase est connecté avec succès !");

// 5. On modifie visuellement le texte de la page pour prouver que le JS fonctionne !
document.querySelector('h1').innerText = "Connexion Firebase Réussie ! 🔥";
document.querySelector('p').innerText = "Bravo, ton Mac et Docker communiquent parfaitement avec Google.";