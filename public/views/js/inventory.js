// Loads all of the user's current items
function onLoad()
{
  console.log("TODO");
  // TODO: load all the person's items from the database
  // Create cards for each item and append them to the webpage
  for(var i = 0; i < 5; i++)
  {
    createCard('12345', 'gift!', 'some_img', 'a present for you', ['food', 'technology']);
  }
}
// Stores all the user's new item in the database
function addItemToDatabase(theForm)
{
  // TODO: Send new item to the database and add item key to user
  alert(theForm.item_name);
  createCard('8888', 'newItem!', 'some_img', 'not overriden', ['clothes']);
}
// Creates a new card on the webpage containing the new item
function createCard(itemID, itemName, itemImg, itemDescrip, itemTags)
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
  var elem = document.getElementById('card_');
  elem.parentNode.removeChild(elem);
  return false;
}

function removeItemFromDatabase()
{

}
