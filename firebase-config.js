import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";

const firebaseConfig = {

apiKey: "AIzaSyCxlLJMRxVXDoJpIzUn5QkbRXb_KZ--0KQ",

authDomain: "fast-level-list.firebaseapp.com",

projectId: "fast-level-list",

storageBucket: "fast-level-list.firebasestorage.app",

messagingSenderId: "405394818577",

appId: "1:405394818577:web:0e76687bad345cf1e313b0"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
