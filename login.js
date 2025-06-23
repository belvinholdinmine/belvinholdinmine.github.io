

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyD2oirkgIR2yqXDxEH9yPk8DYDfQ2W80OY",
  authDomain: "belvin-holdinmine.firebaseapp.com",
  projectId: "belvin-holdinmine",
  storageBucket: "belvin-holdinmine.firebasestorage.app",
  messagingSenderId: "117889084581",
  appId: "1:117889084581:web:e9e13062c0de43c7f5314c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Login error: " + error.message);
    });
});
