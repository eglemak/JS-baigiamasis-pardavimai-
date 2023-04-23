const itemsWrapper = document.getElementById("items-wrapper");

const itemOptionCreation = (item) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  const image = document.createElement("img");
  image.setAttribute("src", item.photo_url);

  const location = document.createElement("div");

  const titleWrapper = document.createElement("div");
  titleWrapper.setAttribute("class", "title-wrapper");

  const title = document.createElement("span");
  title.setAttribute("class", "title");

  const price = document.createElement("span");
  price.setAttribute("class", "price");

  

  const link = document.createElement("a");
  link.setAttribute("class", "item-link");
  link.href = "./item.html";

  link.addEventListener("click", () => {
    localStorage.setItem("id", item.id);
  });

  location.innerHTML = `${item.location}`;
  location.setAttribute("class", "location");

  title.innerHTML = item.name;
  price.innerHTML = `${item.price} Eur`;

  titleWrapper.append(title);
  titleWrapper.append(price);

  wrapper.append(location);
  wrapper.append(image);
  wrapper.append(titleWrapper);
  

  itemsWrapper.append(wrapper);
  link.append(wrapper);
  itemsWrapper.append(link);
};

fetch("https://642db4b6bf8cbecdb40d0e03.mockapi.io/item")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data
      .sort((a, b) => Number(a.price) - Number(b.price))
      .forEach((item) => {
        itemOptionCreation(item);
      });
  });
