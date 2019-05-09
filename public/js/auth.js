

var firebaseConfig = {
    apiKey: process.env.apiKey,
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

// SubmitButton #1

signUpSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var signUpEmail = document.getElementById("signUpEmail");
    var signUpPassword = document.getElementById("signUpPassword");
    var signUpName = document.getElementById("signUpName");
    var signUpSubmit = document.getElementById("signUpSubmit");
    const auth = firebase.auth();
    var name = signUpName.value;
    var email = signUpEmail.value;
    var password = signUpPassword.value;
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    console.log(email, password);
    console.log("Thanks for Signing up!");
    // var text = document.createTextNode('Welcome ' + name.value)
    // var welcome = document.getElementById("welcomeText").appendChild(text)
    email = " ";
    password = " ";
    name = " ";
// LoginButton
})

// submitButton #2
mainSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var mainEmail = document.getElementById("mainEmail");
    var mainPassword = document.getElementById("mainPassword");
    var mainName = document.getElementById("mainName");
    var mainSubmit = document.getElementById("mainSubmit");
    const auth = firebase.auth();
    var name = mainName.value;
    var email = mainEmail.value;
    var password = mainPassword.value;
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    console.log(email, password);
    console.log("Thanks for Signing up!");
    // var text = document.createTextNode('Welcome ' + name.value)
    // var welcome = document.getElementById("welcomeText").appendChild(text)
    email = " ";
    password = " ";
    name = " ";
// LoginButton
})
loginSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var email = loginEmail.value;
    var password = loginPassword.value;
    var loginSubmit = document.getElementById("loginSubmit");
    var signUpName = document.getElementById("signUpName");
    var name = signUpName.value;
    const auth = firebase.auth();
    console.log("User Logged in");
    console.log(email, password);
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
    document.getElementById("loginEmail").value = ""
    document.getElementById("loginPassword").value = ""
    var welcome = document.getElementById("welcomeText").textContent = "Welcome" + name;
    // document.getElementsByClassName("modal").style.display ="none"
    console.log(welcome);
    email = " ";
    password = " ";
    var authData = [auth.signInWithEmailAndPassword(email, password)];
})

logoutBtn.addEventListener("click", function () {
    firebase.auth().signOut();
    document.getElementById("modalBody").hidden;
})


firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        logoutBtn.style.display = "inline";
        var signUpName = document.getElementById("signUpName");
        var name = signUpName.value;
        var mainName = mainName.value;
        var welcome = document.getElementById("welcomeText").textContent = "Welcome " + name;

        var signUpSubmit = document.getElementById("signUpSubmit");
    } else {
        console.log("Not Logged in");
        logoutBtn.style.display = "none"
    }
})