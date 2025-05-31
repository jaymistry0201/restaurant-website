// Navigation
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
}

// Nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  })
})

// Counter Design  
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 1287, 1000);
  counter("count2", 100, 3086, 3000);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 2110, 3000);
});

// Scroll-to-Top Button Logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show/Hide Button on Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Initialize Bootstrap Scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbarNav',
  offset: 70
});

// Scroll to Top When Clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Simple Subscribe Form Handler
document.querySelector('.subscribe-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for subscribing!');
  this.reset();
});
