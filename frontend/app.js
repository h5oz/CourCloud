import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// TA CONFIGURATION FIREBASE (Ne touche à rien, ce sont tes clés)
const firebaseConfig = {
  apiKey: "AIzaSyA2Rr-7n5D0qhDPHGiM3ojE21n-ttTjnQE",
  authDomain: "projet-campos.firebaseapp.com",
  projectId: "projet-campos",
  storageBucket: "projet-campos.firebasestorage.app",
  messagingSenderId: "853957547970",
  appId: "1:853957547970:web:575d72486e3b3accef685b",
  measurementId: "G-QYM4DNMY1C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// On cible la collection "registre_loutres"
const registreCollection = collection(db, "registre_loutres");

const form = document.getElementById('conservation-form');
const signaturesList = document.getElementById('signatures-list');

// ENVOYER une signature
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const texte = document.getElementById('message').value;

    try {
        await addDoc(registreCollection, {
            nom: nom,
            message: texte,
            date: serverTimestamp()
        });
        form.reset();
    } catch (erreur) {
        console.error("Erreur d'ajout :", erreur);
    }
});

// LIRE les signatures en temps réel
const q = query(registreCollection, orderBy("date", "desc"));

onSnapshot(q, (snapshot) => {
    signaturesList.innerHTML = ''; 
    snapshot.forEach((doc) => {
        const data = doc.data();
        const signatureCard = `
            <div class="bg-slate-800 p-6 rounded-lg border-l-4 border-amber-500 shadow-md">
                <p class="font-bold text-amber-500 text-xl font-serif">${data.nom}</p>
                <p class="text-slate-300 mt-2 font-light italic">"${data.message}"</p>
            </div>
        `;
        signaturesList.innerHTML += signatureCard;
    });
});