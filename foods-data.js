import axios from "axios";
import Fuse from "fuse.js";

function listMakerFunction() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((apiRespond) => apiRespond.json())
    .then((foodData) => listElementMaker(foodData));
}
const listElementMaker = (foodData) => {
  for (let i = 0; i < 40; i++) {
    const newList = document.getElementById("main-list");
    var newFood = document.createElement("li");
    newFood.textContent = foodData[i].title;
    newList.appendChild(newFood);
  }
};

function myfunction() {
  const inputValue = document.getElementById("search-box-input").value;
  console.log(inputValue);
  event.preventDefault();
}

export { myfunction, listMakerFunction };

//   const response = await axios(
//     "https://jsonplaceholder.typicode.com/todos"
//   ).json();
//   console.log(response);

//   const fuse = new Fuse(foodData, {
//     keys: ["title"],
//   });

// var parsedData = [];
// async function getTheData() {
//   const data = await (
//     await fetch("https://jsonplaceholder.typicode.com/todos")
//   ).json();
//   console.log(data);
//   return data;
// }
