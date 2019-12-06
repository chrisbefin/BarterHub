// Our web app's Firebase configuration
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

const docRef = firestore.collection("users");
//const docRef = firestore.doc("testDataCollection/VNkMLN5lRwvHQdnZNz29");

const submitNewUsers = document.getElementById("newUsers");




submitNewUsers.addEventListener("click", function(){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var validEmail = !re.test(document.getElementById("emailAddress").value);
  
  if(validEmail || document.getElementById("passwordFirst").value.length < 8 || document.getElementById("userName").value == ""
  || document.getElementById("passwordFirst").value != document.getElementById("passwordConfirm").value || document.getElementById("zipCode").value.length <5){
    alert("Not Filled out Correctly");
    if(document.getElementById("userName").value == ""){
      alert("Enter Username");
    }
    if(validEmail){
        alert("Invalid Email");
    }
    if(document.getElementById("passwordFirst").value.length < 8 ){
      alert("Password is Too Short");
    }
    if(document.getElementById("passwordFirst").value != document.getElementById("passwordConfirm").value){
      alert("Password Does Not Match");
    }
    if(document.getElementById("zipCode").value.length <5){
      alert("Zip Code Must Be Five Digits");
    }
    
    
  
  }else{
    var emailCheck = firestore.collection("users").doc(document.getElementById("emailAddress").value);
    emailCheck.get().then(function(doc) {
      if (doc.exists) {
        alert("Please Choose Different Email");
      } else {
        docRef.doc(document.getElementById("emailAddress").value).set({
          email: document.getElementById("emailAddress").value,
          imageUser: "",
          inventoryCount: 0,
          name: document.getElementById("userName").value,
          numFollowers: 0,
          numTrades: 0,
          password: document.getElementById("passwordFirst").value,
          public: true,
          zipCode: document.getElementById("zipCode").value
        })
        $("#myModal").modal();
      }
    })
  }
})

// getRealTimeUpdates = function(){
//   docRef.onSnapshot(function (snapshot){
//     if (snapshot && snapshot.exists){
//       const myData = snapshot.data();
//       console.log(myData.queriedData);
//       dataOutput.innerText = "Data Output: " + myData[dataToPull];
//     }
//   })
// }

// we must call the function here, otherwise it won't work
//getRealTimeUpdates();