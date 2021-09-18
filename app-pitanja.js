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

let accordion = document.querySelectorAll(".accordion__title");

accordion.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    let panel = item.nextElementSibling;
    let svg = item.childNodes[3];
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    svg.classList.toggle("accordion__svg--rotated");
    locoScroll.update();
  });
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

//

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

//

// skrol do vrha

window.addEventListener("unload", () => {
  window.scrollTo(0, 0);
});

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
