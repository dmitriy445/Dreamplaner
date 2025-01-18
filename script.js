const modal = document.querySelector('.modal-wrapper');
const body = document.querySelector('body');
const btnsModalOpen = document.querySelectorAll('.button[type="button"]');

btnsModalOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hide');
    body.classList.add("no-scroll");
  });
})


const btnModalExit = document.querySelector('.modal__quit');

btnModalExit.addEventListener('click', () => {
  modal.classList.add('hide');
  body.classList.remove("no-scroll");
});


// VIDEO

const playVideoBtn = document.querySelector('.video-button');
const video = document.querySelector('.portfolio__video');
const playVideoIcon = document.querySelector('.video-button img');

playVideoBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    // playVideoIcon.src = "./img/svg/play-icon-active.svg"
  } else {
    video.pause();
    // playVideoIcon.src = "./img/svg/play-icon.svg"
  }
});


//burger menu

const header = document.querySelector(".header");
const burgerBtn = document.querySelector(".burger");
const burgerIcon = document.querySelector(".burger__icon");

burgerBtn.addEventListener("click", () => {
  header.classList.toggle("header--mobile");
  body.classList.toggle("no-scroll");

  if (header.classList.contains("header--mobile")) {
    burgerIcon.src = "./img/svg/burger-menu-close.svg";
  } else {
    burgerIcon.src = "./img/svg/burger-menu.svg";
  }
})