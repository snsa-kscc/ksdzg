gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

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

let tl = gsap.timeline({
  defaults: {
    opacity: 0,
  },
});

// gsap.utils.toArray(".wrap h1").forEach((panel, i) => {
//   tl.to(panel, { x: (i + 1) * -145 });
// });

tl.from(".scrol1", { x: -85 });
tl.from(".scrol2", { x: 105 }, 0);
tl.from(".scrol3", { x: -145 }, 0);

ScrollTrigger.create({
  trigger: ".scrol1",
  start: "top 75%",
  end: "top 30%",
  scroller: "[data-scroll-container]",
  scrub: true,
  animation: tl,
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// skrol do vrha

window.addEventListener("unload", () => {
  window.scrollTo(0, 0);
});

// funkcionalnost za top za navbar

locoScroll.on("scroll", () => {
  if (locoScroll.scroll.instance.scroll.y <= 10) {
    document.querySelector("nav").classList.add("fade-in");
    document.querySelector("nav").classList.remove("fade-out");
  } else {
    document.querySelector("nav").classList.add("fade-out");
    document.querySelector("nav").classList.remove("fade-in");
  }
});
