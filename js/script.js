const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //   toggle nav
    nav.classList.toggle("nav-active");
    //   animation - math to stagger animated delay, no matter how many li items - interpolated
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 1
        }s`;
      }
    });

    // hamburger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// COUNTDOWN CLOCK UNTIL PROJECT DUE DATE
// HTML CSS JSResult
// EDIT ON
var deadline = "October 08 2020 23:00:00 GMT-0400";
function time_remaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}
function run_clock(id, endtime) {
  var clock = document.getElementById(id);

  // get spans where our clock numbers are held
  var days_span = clock.querySelector(".days");
  var hours_span = clock.querySelector(".hours");
  var minutes_span = clock.querySelector(".minutes");
  var seconds_span = clock.querySelector(".seconds");

  function update_clock() {
    var t = time_remaining(endtime);

    // update the numbers in each part of the clock
    days_span.innerHTML = t.days;
    hours_span.innerHTML = ("0" + t.hours).slice(-2);
    minutes_span.innerHTML = ("0" + t.minutes).slice(-2);
    seconds_span.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  update_clock();
  var timeinterval = setInterval(update_clock, 1000);
}
run_clock("clockdiv", deadline);

// Get the modal *****************************************
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
