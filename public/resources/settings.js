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
// Initialize Firebase (this is standard, don't change these two lines)
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//var submitButton = document.getElementById('settings_form');

//values from the the webpage

 var new_email = document.getElementById('new_email');
 var old_password = document.getElementById('old_password');
 var new_password = document.getElementById('new_password');
 var confirm_password= document.getElementById("confirm_password");
 var new_zip = document.getElementById("new_zip");
 const submit_changes = document.getElementById("submit_changes");

 submit_changes.addEventListener("click", function(){
   var docUpdate = firestore.collection("users").doc("VNHuSz5sqhgDeXcusL6a");
   docUpdate.update({
     email: new_email.value,
     password: confirm_password.value,
     zipcode: new_zip.value
   }).then(function(){
     alert("Information has been successfully updated");
     console.log(docUpdate);
   }).catch(function (error){
     alert("Could not update Information");
     console.log('here');
   });
 })
