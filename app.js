const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

let characters = document.querySelectorAll(".first__text");
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
    document.querySelector("html").style.overflow = "initial";
    document.querySelector("body").style.overflow = "inherit";
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

//tu

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
