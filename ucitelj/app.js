gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1.2,
  effects: true,
  smoothTouch: 0.000001,
});

// skrol do vrha

window.addEventListener("unload", () => {
  window.scrollTo(0, 0);
});

let rule = CSSRulePlugin.getRule(".pain::after");

gsap.to(rule, {
  duration: 1,
  scrollTrigger: {
    trigger: ".pain",
    start: "top center",
  },
  cssRule: { scaleX: 0 },
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

gsap.to(".h-1.bg-sky-300", {
  width: "100%",
  duration: 1,
  delay: 0.5,
  ease: "power2.inOut",
});
