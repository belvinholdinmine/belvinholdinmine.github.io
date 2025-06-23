

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
const db = getDatabase(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    const uid = user.uid;
    get(child(ref(db), 'users/' + uid)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        document.getElementById("user-info").innerHTML = "<strong>Welcome:</strong> " + data.fullname;
        document.getElementById("total-deposit").innerText = data.deposit.toFixed(2);
        document.getElementById("active-plan").innerText = data.activePlan;
      }
    });
  } else {
    window.location.href = "login.html";
  }
});

function logout() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}
