// let displayCard = document.querySelector("#card");
// displayCard.addEventListener("click", () => {
//   document.querySelector("#card").style = "display: block;";
// });

let isOpen = false;
function openCard() {
  const card = document.querySelector(".card");
// card.classList.add(".active")

  card.classList.toggle("active");
}
// openCard();

// function openCard() {
//   document.querySelector(".card").classList.add("active");
// }
// openCard();



// function openCard(){
//     const card = document.querySelector(".card");
//     const overlay = document.querySelector(".overlay");
//     card.classList.toggle("active");
//     overlay.classList.toggle("")
//   }