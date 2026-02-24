// 1. On importe les outils Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

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

// 3. Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const votesCollection = collection(db, "live_battle_votes"); // Nouvelle table pour les votes

// 4. Cibler les éléments HTML
const btnMac = document.getElementById('btn-mac');
const btnWin = document.getElementById('btn-win');
const barMac = document.getElementById('bar-mac');
const barWin = document.getElementById('bar-win');
const totalText = document.getElementById('total-votes');

// 5. Fonction pour envoyer un vote dans le Cloud
async function envoyerVote(choix) {
    try {
        await addDoc(votesCollection, { camp: choix });
        // Petit effet fun : on fait trembler le bouton cliqué (facultatif mais stylé)
    } catch (erreur) {
        console.error("Erreur de vote :", erreur);
    }
}

// Lier les clics aux boutons
btnMac.addEventListener('click', () => envoyerVote('Mac'));
btnWin.addEventListener('click', () => envoyerVote('Windows'));

// 6. Écouter la base de données EN TEMPS RÉEL (La magie opère ici)
onSnapshot(votesCollection, (snapshot) => {
    let compteurMac = 0;
    let compteurWin = 0;

    // On compte tous les votes
    snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.camp === 'Mac') compteurMac++;
        if (data.camp === 'Windows') compteurWin++;
    });

    const total = compteurMac + compteurWin;
    totalText.innerText = `Total des votes : ${total}`;

    // On calcule les pourcentages pour animer la barre
    if (total === 0) {
        barMac.style.width = '50%'; barMac.innerText = '50%';
        barWin.style.width = '50%'; barWin.innerText = '50%';
    } else {
        const pourcentageMac = Math.round((compteurMac / total) * 100);
        const pourcentageWin = 100 - pourcentageMac;

        barMac.style.width = `${pourcentageMac}%`; 
        barMac.innerText = pourcentageMac > 10 ? `${pourcentageMac}%` : ''; // Cache le texte si c'est trop petit
        
        barWin.style.width = `${pourcentageWin}%`; 
        barWin.innerText = pourcentageWin > 10 ? `${pourcentageWin}%` : '';
    }
});