// const menuButton = document.querySelector(".header__burger");
// const menuButton1 = document.querySelector(".header__menu");
// const contentBody = document.querySelector("body");

// menuButton.onclick = function () {
//   menuButton.classList.toggle("active");
//   menuButton1.classList.toggle("active");
//   contentBody.classList.toggle("lock");
// }
// menuButton1.onclick = function () {
//   menuButton.classList.remove("active");
//   menuButton1.classList.remove("active");
//   contentBody.classList.remove("lock");
// }

// document.querySelector('#tab').addEventListener('click', setScrollIntoView);

// function setScrollIntoView(false) {
//   const blockSelected = document.querySelector('#tab');
//   blockSelected.scrollIntoView({
//     block: "end",
//     inline: "auto",
//     behavior: "smooth",
//   });
// }

"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Ореra Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile|Edge/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.IOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
  let menuArrows = document.querySelectorAll(".menu__arrow");
  console.log(menuArrows);
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

const currentYear = new Date().getFullYear();
console.log(currentYear);

function updateCounter() {
  const days = document.querySelector(".autumn__days");
  const hours = document.querySelector(".autumn__hours");
  const minutes = document.querySelector(".autumn__minutes");
  const seconds = document.querySelector(".autumn__seconds");

  const nextDate = new Date(`Oct 28 ${currentYear} 00:00:00`);
  const currentTime = new Date();
  const difference = nextDate - currentTime;

  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
  const secondsLeft = Math.floor(difference / 1000) % 60;

  days.innerHTML = `${daysLeft}`;
  hours.innerHTML = `${hoursLeft < 10 ? "0" + hoursLeft : hoursLeft}`;
  minutes.innerHTML = `${minutesLeft < 10 ? "0" + minutesLeft : minutesLeft}`;
  seconds.innerHTML = `${secondsLeft < 10 ? "0" + secondsLeft : secondsLeft}`;
}
setInterval(updateCounter, 1000);

function updateCounter1() {
  const days1 = document.querySelector(".winter__days");
  const hours1 = document.querySelector(".winter__hours");
  const minutes1 = document.querySelector(".winter__minutes");
  const seconds1 = document.querySelector(".winter__seconds");

  const nextDate1 = new Date(`Dec 29 ${currentYear} 00:00:00`);
  const currentTime = new Date();
  const difference1 = nextDate1 - currentTime;

  const daysLeft1 = Math.floor(difference1 / 1000 / 60 / 60 / 24);
  const hoursLeft1 = Math.floor(difference1 / 1000 / 60 / 60) % 24;
  const minutesLeft1 = Math.floor(difference1 / 1000 / 60) % 60;
  const secondsLeft1 = Math.floor(difference1 / 1000) % 60;

  days1.innerHTML = `${daysLeft1}`;
  hours1.innerHTML = `${hoursLeft1 < 10 ? "0" + hoursLeft1 : hoursLeft1}`;
  minutes1.innerHTML = `${
    minutesLeft1 < 10 ? "0" + minutesLeft1 : minutesLeft1
  }`;
  seconds1.innerHTML = `${
    secondsLeft1 < 10 ? "0" + secondsLeft1 : secondsLeft1
  }`;
}
setInterval(updateCounter1, 1000);

function updateCounter2() {
  const days2 = document.querySelector(".spring__days");
  const hours2 = document.querySelector(".spring__hours");
  const minutes2 = document.querySelector(".spring__minutes");
  const seconds2 = document.querySelector(".spring__seconds");
  const nextDate2 = new Date(`March 23 2024 00:00:00`);
  const currentTime = new Date();
  const difference2 = nextDate2 - currentTime;

  const daysLeft2 = Math.floor(difference2 / 1000 / 60 / 60 / 24);
  const hoursLeft2 = Math.floor(difference2 / 1000 / 60 / 60) % 24;
  const minutesLeft2 = Math.floor(difference2 / 1000 / 60) % 60;
  const secondsLeft2 = Math.floor(difference2 / 1000) % 60;

  days2.innerHTML = `${daysLeft2}`;
  hours2.innerHTML = `${hoursLeft2 < 10 ? "0" + hoursLeft2 : hoursLeft2}`;
  minutes2.innerHTML = `${
    minutesLeft2 < 10 ? "0" + minutesLeft2 : minutesLeft2
  }`;
  seconds2.innerHTML = `${
    secondsLeft2 < 10 ? "0" + secondsLeft2 : secondsLeft2
  }`;
}
setInterval(updateCounter2, 1000);

function updateCounter3() {
  const days3 = document.querySelector(".summer__days");
  const hours3 = document.querySelector(".summer__hours");
  const minutes3 = document.querySelector(".summer__minutes");
  const seconds3 = document.querySelector(".summer__seconds");
  const nextDate3 = new Date(`May 26 2024 00:00:00`);
  const currentTime = new Date();
  const difference3 = nextDate3 - currentTime;

  const daysLeft3 = Math.floor(difference3 / 1000 / 60 / 60 / 24);
  const hoursLeft3 = Math.floor(difference3 / 1000 / 60 / 60) % 24;
  const minutesLeft3 = Math.floor(difference3 / 1000 / 60) % 60;
  const secondsLeft3 = Math.floor(difference3 / 1000) % 60;

  days3.innerHTML = `${daysLeft3}`;
  hours3.innerHTML = `${hoursLeft3 < 10 ? "0" + hoursLeft3 : hoursLeft3}`;
  minutes3.innerHTML = `${
    minutesLeft3 < 10 ? "0" + minutesLeft3 : minutesLeft3
  }`;
  seconds3.innerHTML = `${
    secondsLeft3 < 10 ? "0" + secondsLeft3 : secondsLeft3
  }`;
}
setInterval(updateCounter3, 1000);
