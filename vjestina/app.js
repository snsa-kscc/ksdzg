gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1.2,
  effects: true,
  smoothTouch: 0.000001,
});

const rule = CSSRulePlugin.getRule(".skill-features__item::after");
let tl = gsap.timeline({
  defaults: {
    opacity: 0,
  },
});

tl.from(".translation__item-1", { x: -85 }).from(".translation__item-2", { x: 105 }, 0).from(".translation__item-3", { x: -145 }, 0);

ScrollTrigger.create({
  trigger: ".translation__item-1",
  start: "top 75%",
  end: "top 30%",
  scrub: true,
  animation: tl,
});

gsap.to(rule, {
  scrollTrigger: {
    trigger: ".skill-features__item",
    start: "top 60%",
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

const removeSkillFigureTransition = () => {
  const skillFigure = document.querySelector(".skill__figure");
  skillFigure.classList.remove("skill__figure");
  window.removeEventListener("scroll", removeSkillFigureTransition);
};

window.addEventListener("scroll", removeSkillFigureTransition);

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
