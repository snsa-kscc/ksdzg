gsap.from(".svg__line", { duration: 2, opacity: 0, delay: 1, stagger: 1.3 });
gsap.to(".loader", {
  delay: 4,
  duration: 2,
  top: "-100%",
  ease: Expo.easeInOut,
  onComplete: () => {
    document.querySelector("html").style.overflow = "initial";
    document.querySelector("body").style.overflow = "inherit";
  },
});

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
