gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1.2,
  effects: true,
  // smoothTouch: 0.000001,
});

let accordion = document.querySelectorAll(".accordion__title");

accordion.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    let panel = item.nextElementSibling;
    let svg = item.childNodes[3];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    svg.classList.toggle("accordion__svg--rotated");
    ScrollTrigger.refresh();
  });
});

const observableItems = document.querySelectorAll(".fade");

const options = {
  threshold: 0,
  rootMargin: "0px 0px -25% 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, options);

observableItems.forEach((item) => {
  observer.observe(item);
});

// skrol do vrha

window.addEventListener("unload", () => {
  window.scrollTo(0, 0);
});

const menuTl = gsap.timeline({
  paused: true,
});

menuTl.to(".nav-container", {
  x: 0,
  duration: 1,
  ease: "expo.inOut",
});

menuTl.reverse();

const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");

navOpen.addEventListener("click", () => {
  menuTl.play();
  document.querySelector("body").classList.toggle("overflow--hidden");
});
navClose.addEventListener("click", () => {
  menuTl.reverse();
  document.querySelector("body").classList.toggle("overflow--hidden");
});
