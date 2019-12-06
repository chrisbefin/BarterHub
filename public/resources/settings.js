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

 var new_username = document.getElementById('new_username');
 var old_password = document.getElementById('old_password');
 var new_password = document.getElementById('new_password');
 var confirm_password= document.getElementById("confirm_password");
 var new_zip = document.getElementById("new_zip");
 const submit_changes = document.getElementById("submit_changes");

 submit_changes.addEventListener("click", function(){
   var docUpdate = firestore.collection("users").doc(isNotEmail);
   //alert(docUpdate.getString("password"));
   docUpdate.get().then(function(doc){
     if(confirm_password.value != "" && new_password.value != "" && confirm_password.value == new_password.value ){
       if(doc.get("password") == old_password.value){
         docUpdate.update({
           password: confirm_password.value
         });
         alert("Password has been successfully updated");
       }
       else{
         alert("Old Password you entered is incorrect or the Fields are empty");
       }
     }
     else{
       alert("The new password does not match the ReEntered password");
     }
     if(new_username.value != ""){
       docUpdate.update({
         username: new_username.value
       });
       alert("Username has been successfully updated to: " + new_username.value );
     }
     else{
       console.log("Username field is empty");
     }
     if(new_zip.value != ""){
       docUpdate.update({
         zipcode: new_zip.value
       });
       alert("Zipcode has been successfully updated to: " + new_zip.value);
     }
     else{
       console.log("Zipcode field is empty");
     }
     }).catch(function (error){
       alert("Could Not Update Information!!!");
     });
 })
