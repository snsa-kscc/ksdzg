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
let tl = gsap.timeline({
  delay: 0.5,
  defaults: {
    duration: 1,
    ease: "power2.inOut",
  },
});

tl.to(".path__line", {
  width: "100%",
});

tl.to(
  rule,
  {
    cssRule: { scaleX: 0 },
  },
  "+=0.5"
);

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

gsap.to([".kid__line--first", ".kid__line--second"], {
  duration: 1,
  width: "100%",
  ease: "power2.inOut",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".kid",
    start: "top 70%",
  },
});

ScrollTrigger.matchMedia({
  "(min-width: 878px)": () => {
    gsap.to(".wrapper--left", {
      // x: -400,
      xPercent: -30,
      scale: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".wrapper--left",
        start: "top center",
        end: "bottom 30%",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true,
      },
    });

    gsap.to(".wrapper--right", {
      // x: 400,
      xPercent: 30,
      scale: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".wrapper--right",
        start: "top center",
        end: "bottom 30%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
  },
});

const circle = document.querySelector("circle");
const circleLength = circle.getTotalLength();
circle.style.strokeDasharray = circleLength;
circle.style.strokeDashoffset = circleLength;

ScrollTrigger.create({
  trigger: ".svg-story",
  start: "center center",
  end: () => `${innerHeight * 2}`,
  pin: true,
  onUpdate: (self) => {
    circle.style.strokeDashoffset = circleLength - self.progress * circleLength;
  },
});
