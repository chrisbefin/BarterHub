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

const submitNewUsers = document.querySelector("#submitNewUsers");

submitNewUsers.addEventListener("click", function(){
  const inputTestString = inputTextField.value;
  docRef.doc("testing").set({
    email: emailAddress,
    imageUser: "",
    inventoryArray: inventory/l4Z2jKxFcm5w3g7fOZFu,
    inventoryCount: 1,
    name: "blah",
    numFollowers: 0,
    numTrades: 0,
    password: passwordFirst,
    public: true,
    zipCode: zipCode
    
  }).then(function(){
    console.log("That shit worked");
  }).catch(function (error){
    console.log("Nope. Didn't work.");
  });
})

getRealTimeUpdates = function(){
  docRef.onSnapshot(function (snapshot){
    if (snapshot && snapshot.exists){
      const myData = snapshot.data();
      console.log(myData.queriedData);
      dataOutput.innerText = "Data Output: " + myData[dataToPull];
    }
  })
}

// we must call the function here, otherwise it won't work
getRealTimeUpdates();