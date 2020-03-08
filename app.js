const sections = document.querySelectorAll("section");
const spc = document.querySelector(".spcer");
const gradients = [
  "linear-gradient(to right, #009fff, #ff416c",
  "linear-gradient(to right, #654ea3, #eaafc8",
  "linear-gradient(to right, #ff416c, #ff4b2b)"
];

const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    console.log(entry);
    const className = entry.target.className;
    console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if (entry.isIntersecting) {
      spc.style.setProperty("left", `${directions.left}px`);
      spc.style.setProperty("top", `${directions.top}px`);
      spc.style.setProperty("width", `${directions.width}px`);
      spc.style.setProperty("height", `${directions.height}px`);
      spc.style.background = gradients[gradientIndex];
    }
  });
}
sections.forEach(section => {
  observer.observe(section);
});
