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

// scroll
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
  document.getElementById("tab" + tabIndex + "Content").style.display = "block";
}

// contact section
const form = document.querySelector(".contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //buttona klikledikde yenilenme olmasin

  const nameInput = document.querySelector("#name");
  const surnameInput = document.querySelector("#surname");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const nameError = document.querySelector("#nameError");
  const surnameError = document.querySelector("#surnameError");
  const emailError = document.querySelector("#surnameError");
  const passwordError = document.querySelector("#surnameError");

  nameInput.style.borderColor = "";
  surnameInput.style.borderColor = "";
  emailInput.style.borderColor = "";
  passwordInput.style.borderColor = "";

  nameError.textContent = "";
  surnameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let isEmpty = true;

  if (nameInput.value.trim().length === 0) {
    nameError.textContent = "Ad boş ola bilməz!";
    nameInput.style.borderColor = "red";
    isEmpty = false;
  }

  if (surnameInput.value.trim().length === 0) {
    surnameError.textContent = "Soyad boş ola bilməz!";
    surnameInput.style.borderColor = "red";
    isEmpty = false;
  }

  if (emailInput.value.trim().length === 0) {
    emailError.textContent = "Email boş ola bilməz!";
    emailInput.style.borderColor = "red";
    isEmpty = false;
  }

  if (passwordInput.value.trim().length === 0) {
    passwordError.textContent = "Shifrə boş ola bilməz!";
    passwordInput.style.borderColor = "red";
    isEmpty = false;
  }

  if (isEmpty) {
    const user = {
      firstName: surnameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(user);
    alert("Registered is completed!");
  }
});
