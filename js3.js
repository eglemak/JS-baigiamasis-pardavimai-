const button = document.getElementById("submit_button");

const fetchItems = (newItem) => {
  fetch(`https://642db4b6bf8cbecdb40d0e03.mockapi.io/item`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const successMessage = document.getElementById("success_message");
      successMessage.innerHTML = "Item added";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 1000);
    });
};

button.addEventListener("click", () => {
  
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const price = document.getElementById("price").value;
  const photo_url = document.getElementById("photo_url").value;
  const desc = document.getElementById("desc").value;


  if (name && location && price && photo_url && desc) {
  const newItem = {
    name: name,
    location: location,
    price: price,
    photo_url: photo_url,
    desc: desc,
  };

  fetchItems(newItem);
} else {
  const successMessage = document.getElementById("failure_message");
  successMessage.innerHTML = "Fill all inputs";
}
});
