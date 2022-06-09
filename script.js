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
