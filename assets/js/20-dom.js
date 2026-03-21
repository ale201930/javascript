const formulario= document.getElementById("form");
console.log(formulario);


const noExiste= document.getElementById("noExiste");
console.log(noExiste);


const card = document.querySelector(".card");
console.log(card);

//const info = document.querySelector(".premium");
const info = (document.querySelector(".premium").textContent =
"aprendiendo a manipular el dom");

console.log(info);


const cards = document.querySelectorAll(".card");
console.log(cards);

const formularios= document.querySelectorAll("#form");
console.log(formularios);

const noExiste2= document.querySelectorAll("#noExiste");
console.log(noExiste2);