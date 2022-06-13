gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1.2,
  effects: true,
  smoothTouch: 0.000001,
});

gsap.to(".approach-circle", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".approach-circle",
    start: "top",
  },
});

const rule = CSSRulePlugin.getRule(".approach-hero__img::after");

gsap.to(rule, {
  scrollTrigger: {
    trigger: ".approach-hero",
    start: "top 20%",
    toggleClass: { targets: ".approach-hero__text", className: "show" },
    once: true,
  },
  cssRule: {
    scaleY: 0,
  },
  duration: 1,
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
  //menuTl.reversed(!t1.reversed());
  menuTl.play();
  document.querySelector("body").classList.toggle("overflow--hidden");
});
navClose.addEventListener("click", () => {
  //menuTl.reversed(!t1.reversed());
  menuTl.reverse();
  document.querySelector("body").classList.toggle("overflow--hidden");
});
