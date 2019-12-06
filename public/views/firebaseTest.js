/*
How to Use:

Pull up the firebaseTestHTML in a browser. It has simple functionality with only
three buttons.

The first, "Update Data", means whatever you put in that input text box,
it will update in the database that specific document and leave everything else inside it
the same.

The next button, reset data, will erase the entire document (if it exists) and
create a brand new one with the data you supply. It will not have the same fields as
the deleted object and will only have the fields you provide (in this case only one).

Lastly, the pull button will allow you to pull data from the database and output it in
the console. There is also another function below which is automatically updating the page
whenever you click the "update" or "reset data" buttons. It is similar to the pull button,
except it is automatically called every time something changes in the database.

*/
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


// the docRef is the specific document in our database you would like to update
const docRef = firestore.doc("users/VaWKmmcc5NnN2XiVB7Zx");
// this is the specific field we want to change
const userName = "name"
const userImage = "imageUser"

// this is the query for the input text so we can use it
// const inputTextField = document.querySelector("#inputForTesting");
// the next four are just the buttons and the text field that updates
// whenever a change happens in our database (it is displayed on the webpage)
// const submitButton = document.querySelector("#submitButton");
// const pullDataButton = document.querySelector("#pullDataButton");
// const updateDataButton = document.querySelector("#updateDataButton");
const nameOutput = document.querySelector("#nameOutput");
const imageOutput = document.getElementById("userImage");


// this function updates the field for a specific document
// note we could have just used the "docRef" variable above instead of the docUpdate,
// but I wanted to show the different ways to query the database
// updateDataButton.addEventListener("click", function(){
//   var docUpdate = firestore.collection("testDataCollection").doc("VNkMLN5lRwvHQdnZNz29");
//   const inputTestString = inputTextField.value;
//   docUpdate.update({
//     // this is where the specific field is updated
//     testString: inputTestString
//   }).then(function(){
//     console.log("That shit worked");
//     console.log(inputTestString);
//   }).catch(function (error){
//     console.log("Nope. Didn't work.");
//   });
// })

// this function deletes (if it exists) and creates a new document so use wisely
// it will not have the same structure as the document you deleted
// submitButton.addEventListener("click", function(){
//   const inputTestString = inputTextField.value;
//   docRef.set({
//     testString: inputTestString
//   }).then(function(){
//     console.log("That shit worked");
//     console.log(inputTestString);
//   }).catch(function (error){
//     console.log("Nope. Didn't work.");
//   });
// })

// this function pulls data manually (you must click the pull button)
// pullDataButton.addEventListener("click", function(){
//   docRef.get().then(function (snapshot){
//     if (snapshot && snapshot.exists){
//       const myData = snapshot.data();
//       console.log(myData[userName]);
//     }
//   }).catch(function (error) {
//     console.log("Got an error");
//   });
// })

// this function will pull data from the database automatically everytime something
// changes in the database
getRealTimeUpdates = function(){
  docRef.onSnapshot(function (snapshot){
    if (snapshot && snapshot.exists){
      const myData = snapshot.data();
      console.log(myData[userName]);
      nameOutput.innerText = myData[userName];
      imageOutput.src = "https://tinyurl.com/r9wfglu";

    }
  })
}

// we must call the function here, otherwise it won't work
getRealTimeUpdates();



// IGNORE THIS...
// submitButton.addEventListener("click", function(){
//   const descriptionToSave = inputTextField.value;
//   docRef.set({
//     description: descriptionToSave
//   }).then(function(){
//     console.log("That shit worked");
//     console.log(descriptionToSave);
//   }).catch(function (error){
//     console.log("Nope. Didn't work.");
//   });
// })
