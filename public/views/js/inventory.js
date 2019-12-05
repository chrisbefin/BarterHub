// FIREBASE CONFIG
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

// Loads all of the user's current items
function onLoad()
{
  console.log("entered onLoad()");
  // TODO: load all the person's items from the database
  // Create cards for each item and append them to the webpage
  for(var i = 0; i < 5; i++)
  {
    createCard('12345', 'gift!', 'some_img', 'a present for you', 3, ['food', 'technology']);
  }
}
// Stores all the user's new item in the database
function addItemToDatabase()
{
  // Get all the data from the form
  var form = document.getElementById("add_item_form")
  var itemName = form.item_name.value;
  var url = form.item_url.value;
  var descrip = form.inputted_description.value;
  var quan = form.item_quantity.value;

  // Other info that will be sent to the database (sold and date posted):
  var id = Math.floor(Math.random()*1000000);
  //var currDate = firebase.firestore.Timestamp();

  var item_tags = [];
  if(form.foodBox.checked) { item_tags.push('food'); }
  if(form.clothesBox.checked) { item_tags.push('clothes'); }
  if(form.furnitureBox.checked) { item_tags.push('furniture'); }
  if(form.appliancesBox.checked) { item_tags.push('appliances'); }
  if(form.artsBox.checked) { item_tags.push('arts'); }
  if(form.toysBox.checked) { item_tags.push('toys'); }
  if(form.booksBox.checked) { item_tags.push('books'); }
  if(form.technologyBox.checked) { item_tags.push('technology'); }
  if(form.toolsBox.checked) { item_tags.push('tools'); }
  if(form.servicesBox.checked) { item_tags.push('services'); }

  // TODO: QUERY DATABASE: create a new item and update the db
  // Add a new document in collection "inventory"
  firestore.collection("inventory").doc('card_' + id.toString()).set({
      date_posted: firebase.firestore.Timestamp.now(),
      description: descrip,
      image: url,
      name: itemName,
      quantity: quan,
      sold: false,
      tags: item_tags
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  // Create the corresponding card
  createCard(id, itemName, url, descrip, quan, tags);
}
// Creates a new card on the webpage containing the new item
function createCard(itemID, itemName, itemImg, itemDescrip, itemQuantity, itemTags)
{
  // Get all the info submitted by the modal form and create a card with all those attributes
  // TODO: Set the card's id to something unique that matches its identity in the database

  var container = document.getElementById('item_card_holder');
  var newCard = document.createElement('div');
  newCard.classList = 'card';
  // TODO: Need to pull all of these values from the database or form
  var item_id = itemID;
  var card_id = "card_" + item_id;
  var item_name = itemName;
  var item_img = itemImg;
  var description = itemDescrip;
  var item_tags = itemTags; // Items can have many tags or none -- have to add them!
  var tag_content = ``;
  if(item_tags.length != 0)
  {
    tag_content += `
    <br><br>`;
    for(var i = 0; i < item_tags.length; i++)
    {
      tag_content += `
      <span class="label ${item_tags[i]}">${item_tags[i]}</span>`;
    }
  }

  // May need to add the <div class="col-auto mb-3"> to keep it in format
  // TODO: give each card a unique id!!!
  var content = `
  <div id="${card_id}" class="card" style="width: 20rem;">
    <img src="${item_img}" class="card-img-top" alt="${item_name}">
    <div class="card-body">
      <h5 class="card-title">${item_name}</h5>
      <p class="card-text"><b>Quantity: </b>${itemQuantity}</p>
      <p class="card-text">${description}</p>
      <input type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#delete_item" value="Remove Item"/>
      ${tag_content}
    </div>
  </div>
  `;

  container.innerHTML += content;
}

function removeCard()
{
  var elem = document.getElementById('card_12345');
  elem.parentNode.removeChild(elem);
  return false;
}

function removeItemFromDatabase()
{

}
