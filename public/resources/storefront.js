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

if (localStorage.getItem('loggedIn') == false) {
  console.log('here');
  document.getElementById('inventoryLink').href = "../views/BBlogin.html";
  document.getElementById('profileLink').href = "../views/BBlogin.html";
  document.getElementById('settingsLink').href = "../views/BBlogin.html";
}
// the docRef is the specific document in our database you would like to update
const docRef = firestore.collection("inventory");
// this is the specific field we want to change
const userName = "name";
const userImage = "imageUser";
const itemDescription = "description";


const pullDataButton = document.getElementById("searchButton");
const searchInput = $('#search').val();

var items = [];
var searchedItems = []


pullDataButton.addEventListener("click", function(){
  // docRef.where("description", "array-contains-any", ["description", "hello"] ).onSnapshot(function (querySnapshot){
  console.log($('#search').val());
  docRef.where("tags", "array-contains-any", [$('#search').val()] ).onSnapshot(function (querySnapshot){
      querySnapshot.forEach(function(doc) {
          searchedItems.push(doc.data());
      });
      console.log(searchedItems.length);
      populateSearchedItems(searchedItems);
  });
})

function populateSearchedItems(items) {
  var length = items.length;
  if (items.length > 12) {
    length = 12;
  }
  for (i = 0; i < length; i++) {
    console.log('here')
    // console.log(items[i]['description']);
    var email = 'email' + i.toString();
    var image = 'img' + i.toString()
    var name = 'name' + i.toString()
    var description = 'description' + i.toString();
    var card = 'card' + i.toString();

    document.getElementById(card).hidden = false;
    document.getElementById(email).href = 'MAILTO:' + items[i]['email'];
    document.getElementById(image).src = items[i]['image'];
    // console.log(items[i]['image']);
    if (items[i]['description'].length > 20){
      document.getElementById(description).innerHTML = items[i]['description'].substring(0, 20);
    }
    else {
      document.getElementById(description).innerHTML = items[i]['description'];
    }
    document.getElementById(name).innerHTML = items[i]['name'];

    var modalEmail = 'modalEmail' + i.toString();
    var title = 'title' + i.toString();
    var modalimg = 'modalimg' + i.toString();
    var fullDescription = 'fullDescription' + i.toString();
    var quantity = 'quantity' + i.toString();
    var date = 'date' + i.toString();
    document.getElementById(title).innerHTML = items[i]['name'];
    document.getElementById(fullDescription).innerHTML = items[i]['description'];
    document.getElementById(modalimg).src = items[i]['image'];
    document.getElementById(modalEmail).href = 'MAILTO:' + items[i]['email'];
    document.getElementById(quantity).innnerText = 'Quantity: ' + items[i]['quantity'].toString();
  }
  for (i = 11; i > items.length-1; i--) {
    var card = 'card' + i.toString();
    document.getElementById(card).hidden = true;
  }
  searchedItems = [];
}

// this function will pull data from the database automatically everytime something
// changes in the database
getRealTimeUpdates = function(callback){
  docRef.onSnapshot(function (querySnapshot){
      querySnapshot.forEach(function(doc) {
          items.push(doc.data());
      });
      callback(items);
  });
}

function helperFunction(items) {
  var length = items.length;
  if (items.length > 12) {
    length = 12;
  }
  for (i = 0; i < items.length; i++) {
    var email = 'email' + i.toString();
    var image = 'img' + i.toString();
    var name = 'name' + i.toString();
    var description = 'description' + i.toString();
    var card = 'card' + i.toString();
    document.getElementById(card).hidden = false;
    document.getElementById(email).href = 'MAILTO:' + items[i]['email'];
    document.getElementById(image).src = items[i]['image'];
    if (items[i]['description'].length > 20){
      document.getElementById(description).innerHTML = items[i]['description'].substring(0, 20);
    }
    else {
      document.getElementById(description).innerHTML = items[i]['description'];
    }
    document.getElementById(name).innerHTML = items[i]['name'];

    var modalEmail = 'modalEmail' + i.toString();
    var title = 'title' + i.toString();
    var modalimg = 'modalimg' + i.toString();
    var fullDescription = 'fullDescription' + i.toString();
    var quantity = 'quantity' + i.toString();
    var date = 'date' + i.toString();
    document.getElementById(title).innerHTML = items[i]['name'];
    document.getElementById(fullDescription).innerHTML = items[i]['description'];
    document.getElementById(modalimg).src = items[i]['image'];
    document.getElementById(modalEmail).href = 'MAILTO:' + items[i]['email'];
    document.getElementById(quantity).innerText = 'Quantity: ' + items[i]['quantity'];
  }
  for (i = 11; i > items.length-1; i--) {
    var card = 'card' + i.toString();
    document.getElementById(card).hidden = true;
  }
}

getRealTimeUpdates(helperFunction);



// we must call the function here, otherwise it won't work
// getRealTimeUpdates();
// helperFunction(items);
