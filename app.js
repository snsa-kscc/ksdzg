gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1.2,
  effects: true,
  smoothTouch: 0.000001,
});

let characters = [
  document.querySelectorAll(".skill__overflow:nth-child(1) .title__text"),
  document.querySelectorAll(".skill__overflow:nth-child(2) .title__text"),
  document.querySelectorAll(".skill__overflow:nth-child(3) .title__text"),
];

characters.forEach((e) => {
  gsap.to(e, { y: 160 });
});

gsap.to(".svg-line__black", {
  duration: 2,
  opacity: 1,
  delay: 1,
  stagger: 1.3,
});

gsap.to(".loader", {
  delay: 4,
  duration: 1.7,
  y: "-100%",
  ease: "expo.inOut",
  onComplete: () => {
    document.querySelector("body").classList.toggle("overflow--hidden");
    animateUpCharacter();
  },
});

const animateUpCharacter = () => {
  characters.forEach((line, idx) => {
    setTimeout(() => {
      line.forEach((e, i) => {
        gsap.to(e, {
          y: 0,
          delay: 0.05 * i,
          ease: "power1.out",
        });
      });
    }, 300 * idx);
  });
};

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

let tl = gsap.to(".logotip__ksd", { scale: 0.8, opacity: 1 });

ScrollTrigger.create({
  trigger: ".emblem",
  start: "50% 50%",
  end: () => `+=${document.querySelector(".emblem").offsetWidth}`,
  animation: tl,
  scrub: true,
  pin: true,
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

// kontaktna

let testForm = document.querySelector(".form form");

testForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(testForm);
  fetch(testForm.getAttribute("action"), {
    method: "POST",
    headers: {
      Accept: "application/x-www-form-urlencoded;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: new URLSearchParams(formData).toString(),
  }).then((res) => {
    if (res) {
      document.querySelector(".confirmation").classList.add("show");
      testForm.reset();
      setTimeout(() => {
        document.querySelector(".confirmation").classList.remove("show");
      }, 5000);
    }
  });
});

document.querySelector("body").classList.add("overflow--hidden");

document.querySelector(".loader").addEventListener("touchmove", (e) => {
  e.preventDefault();
});
