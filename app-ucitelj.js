const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

//

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

//

let characters = [
  document.querySelectorAll(".overflow:nth-child(1) .title__text"),
  document.querySelectorAll(".overflow:nth-child(2) .title__text"),
  document.querySelectorAll(".overflow:nth-child(3) .title__text"),
];

characters.forEach((e, index) => {
  gsap.to(e, 0, { y: 160 });
});

document.querySelector("html").classList.add("overflow--reset");
document.querySelector("body").classList.add("overflow--reset");
animateUpCharacter();

function animateUpCharacter() {
  characters[0].forEach((e, index) => {
    // gsap.to(e, 0, { y: 105 });
    gsap.to(e, 0.3, {
      y: 0,
      delay: 0.03 * index,
      ease: "power1.out",
    });
  });
  characters[1].forEach((e, index) => {
    // gsap.to(e, 0, { y: 105 });
    gsap.to(e, 0.4, {
      y: 0,
      delay: 0.04 * index,
      ease: "power1.out",
    });
  });
  characters[2].forEach((e, index) => {
    // gsap.to(e, 0, { y: 105 });
    gsap.to(e, 0.4, {
      y: 0,
      delay: 0.04 * index,
      ease: "power1.out",
    });
  });
}

// gsap.set(".logotip__ksd", { svgOrigin: "842 595" });
let tl = gsap.to(".logotip__ksd", { scale: 0.8, opacity: 1 });

ScrollTrigger.create({
  trigger: ".fourth",
  start: "50% 50%",
  end: () => "+=" + document.querySelector(".fourth").offsetWidth,
  scroller: "[data-scroll-container]",
  animation: tl,
  scrub: true,
  pin: true,
});

// gsap.to(".fade-in", {
//   scrollTrigger: {
//     trigger: ".fade-in",
//     scroller: "[data-scroll-container]",
//     start: "1px 85%",
//   },
//   opacity: 1,
//   duration: 1,
// });

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

//

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

//

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

// const btn = document.querySelector(".testni");
// btn.addEventListener("click", () => {
//   document.querySelector(".confirmation").classList.add("show");
//   setTimeout(() => {
//     document.querySelector(".confirmation").classList.remove("show");
//   }, 5000);
// });

//// funkcionalnost za top za navbar

locoScroll.on("scroll", () => {
  if (locoScroll.scroll.instance.scroll.y <= 10) {
    document.querySelector("nav").classList.add("fade-in");
    document.querySelector("nav").classList.remove("fade-out");
  } else {
    document.querySelector("nav").classList.add("fade-out");
    document.querySelector("nav").classList.remove("fade-in");
  }
});
