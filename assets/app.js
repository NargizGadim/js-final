let isOpen = true;
function openCard() {
  document.querySelector(".card").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
  if (isOpen) {
    document.querySelector(".overlay").onclick = () => {
      document.querySelector(".card").classList.remove("active");
      document.querySelector(".overlay").classList.remove("active");
    };
  }
}
