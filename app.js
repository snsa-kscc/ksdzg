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

let characters = document.querySelectorAll(".title__text");
characters.forEach((e, index) => {
  gsap.to(e, 0, { y: 160 });
});

gsap.from(".svg__line", { duration: 2, opacity: 0, delay: 1, stagger: 1.3 });
gsap.to(".loader", {
  delay: 4,
  duration: 1.7,
  top: "-100%",
  ease: Expo.easeInOut,
  onComplete: () => {
    document.querySelector("html").classList.add("overflow--reset");
    document.querySelector("body").classList.add("overflow--reset");
    animateUpCharacter();
  },
});

function animateUpCharacter() {
  characters.forEach((e, index) => {
    // gsap.to(e, 0, { y: 105 });
    gsap.to(e, 0.5, {
      y: 0,
      delay: 0.05 * index,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.126,0.382 0.488,0.818 0.646,0.966 0.838,1.146 0.818,1.001 1,1"
      ),
    });
  });
}

let tl = gsap.to(".logotip__ksd", { scale: 0.8, opacity: 1 });

ScrollTrigger.create({
  trigger: ".fourth",
  start: "50% 50%",
  end: "+=2000",
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

let testForm = document.querySelector(".sixth__form form");

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
