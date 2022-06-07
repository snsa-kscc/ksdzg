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

gsap.from(".svg__line--black", {
  duration: 2,
  opacity: 0,
  delay: 1,
  stagger: 1.3,
});

gsap.to(".loader", {
  delay: 4,
  duration: 1.7,
  top: "-100%",
  ease: "expo.inOut",
  onComplete: () => {
    document.querySelector("html").classList.add("overflow--reset");
    document.querySelector("body").classList.add("overflow--reset");
    animateUpCharacter();
  },
});

const animateUpCharacter = () => {
  characters.forEach((character, idx) => {
    setTimeout(() => {
      character.forEach((e, i) => {
        gsap.to(e, {
          y: 0,
          delay: 0.05 * i,
          ease: "power1.out",
        });
      });
    }, 300 * idx);
  });
};

let tl = gsap.to(".logotip__ksd", { scale: 0.8, opacity: 1 });

ScrollTrigger.create({
  trigger: ".fourth",
  start: "50% 50%",
  end: () => `+=${document.querySelector(".fourth").offsetWidth}`,
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
