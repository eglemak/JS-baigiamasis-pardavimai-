const itemId = localStorage.getItem("id");

const addElementsToScreen = (data) => {
  const itemPhoto = document.getElementById("photo");
  itemPhoto.style.backgroundImage = `url(${data.photo_url})`;
  console.log(data);

  const title = document.getElementById("item-title");
  title.innerHTML = data.name;

  const description = document.getElementById("item-description");
  description.innerHTML = data.desc;

  const price = document.getElementById("price");
  price.innerHTML = `${data.price} Eur`;

  const location = document.getElementById("item-location");
  location.innerHTML = `Location: ${data.location}`;

};


fetch(`https://642db4b6bf8cbecdb40d0e03.mockapi.io/item/${itemId}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    addElementsToScreen(data);
  });


  


const deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener('click', () => {

  fetch(`https://642db4b6bf8cbecdb40d0e03.mockapi.io/item/${itemId}`, {
    method: 'DELETE',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  })
    .then((data) => {
      console.log('Item deleted successfully');
      const successDeleteMessage = document.getElementById("delete-message");
      successDeleteMessage.innerHTML = "Item deleted";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 2000);
    });



  
});


