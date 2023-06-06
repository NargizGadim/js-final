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

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  // document.querySelector("header").classList.toggle("scrolled");
  // console.log(window.scrollY)
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Swiper JS code

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// about section 
function selectTab(tabIndex) {
  //Hide All Tabs
  document.querySelector("#tab1Content").style.display = "none";
  document.querySelector("#tab2Content").style.display = "none";
  //Show the Selected Tab
  document.getElementById("tab" + tabIndex + "Content").style.display =
  "block";
  
}