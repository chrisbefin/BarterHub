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

const submitButton = document.getElementById('settings_form');

function SettingsFunction(form){
  alert(form.new_email.value);
  var docupdate = firestore.collection("users").doc("VNHuSz5sqhgDeXcusL6a");
  docUpdate.update({
    "email": form.new_email.value,
    "password": form.confirm_password.value,
    "zipcode": form.new_zip.value
  });
};
