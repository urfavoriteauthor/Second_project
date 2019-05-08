
var firebaseConfig = {
    apiKey: "AIzaSyBvGIfOnVpnpqWsTh1GKZEj9lkUPdR9bMc",
    authDomain: "freelance-a-lot-978be.firebaseapp.com",
    databaseURL: "https://freelance-a-lot-978be.firebaseio.com",
    projectId: "freelance-a-lot-978be",
    storageBucket: "freelance-a-lot-978be.appspot.com",
    messagingSenderId: "535209299900",
    appId: "1:535209299900:web:0ce9bf91189748f4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   mak auth and firestore refrences

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var loginSubmit = document.getElementById("loginSubmit");
var logoutBtn = document.getElementById("logout");
var signUpSubmit = document.getElementById("signUpSubmit");
const auth = firebase.auth();
const db = firebase.firestore();
// auth.signInWithEmailAndPassword(firstName, lastName, email);

auth.onAuthStateChanged(firebaseUser => {});
// var signUp = document.querySelector("SignUp");

signUpSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var signUpEmail = document.getElementById("signUpEmail");
    var signUpPassword = document.getElementById("signUpPassword");
    var signUpSubmit = document.getElementById("signUpSubmit");
    const auth = firebase.auth();
    var email = signUpEmail.value;
    var password = signUpPassword.value;
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    console.log(email, password);
    console.log("also working");
    email = " ";
    password = " ";

})
loginSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var email = loginEmail.value;
    var password = loginPassword.value;
    var loginSubmit = document.getElementById("loginSubmit");
    const auth = firebase.auth();
    console.log("User Logged in");
    console.log(email, password);
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    document.getElementById("loginEmail").value=""
    document.getElementById("loginPassword").value=""
})

logoutBtn.addEventListener("click", function () {
    firebase.auth().signOut();
})

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        logoutBtn.style.display="inline";
    } else {
        console.log("Not Logged in");
        logoutBtn.style.display="none"
    }
})