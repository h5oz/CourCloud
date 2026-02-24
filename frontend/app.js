import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, setDoc, onSnapshot, increment } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

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

window.incrementerViews = async (loutreId) => {
    const loutreRef = doc(db, "statistiques_loutres", loutreId);
    const countDisplay = document.getElementById('view-count');

    try {
        await setDoc(loutreRef, { vues: increment(1) }, { merge: true });
    } catch (e) { console.error(e); }

    onSnapshot(loutreRef, (doc) => {
        if (doc.exists()) countDisplay.innerText = doc.data().vues;
    });
};