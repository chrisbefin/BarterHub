var firebaseConfig = {
  apiKey: "AIzaSyB1aqIHmgNnx1HdJ9mqTv67UVFrEMUfX-0",
  authDomain: "barterhub-3c37c.firebaseapp.com",
  databaseURL: "https://barterhub-3c37c.firebaseio.com",
  projectId: "barterhub-3c37c",
  storageBucket: "barterhub-3c37c.appspot.com",
  messagingSenderId: "1040823246711",
  appId: "1:1040823246711:web:7e8041584d5cd2fd7a0b72",
  measurementId: "G-ZD27G0MVXH"
};


firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

var email = document.getElementById('email');
var password = document.getElementById('password');
var pullData = document.getElementById("login_button")


pullData.addEventListener("click", function(){
  const docRef = firestore.collection("users").doc(email.value);
  docRef.get().then(function(doc){
    console.log(doc.get('password'));
    if(doc.exists){
      if (doc.get('password') == password.value){
        //isNotEmail = email.value;
        localStorage.setItem("email", email.value);
        localStorage.setItem("loggedIn", true);
        //console.log(isNotEmail);
        window.location = "../index.html";
      }
      else{
        window.alert("Incorrect password.");
      }
    }
    else{
      window.alert("That " + email.value + " is not an existing account.");
    }

  }).catch(function (error){
    console.log("Nope. Didn't work.");
  });
})
