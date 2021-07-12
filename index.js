import { myfunction, listMakerFunction } from "./foods-data.js";

listMakerFunction();
const formelement = document.getElementById("searchbox-submit");
formelement.addEventListener("submit", () => {
  `${myfunction()}`;
});
