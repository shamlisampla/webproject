
document.getElementById("app").innerHTML = `
<div class='wrapper'>
  <div class='view'>
    <div class='left'><</div>
    <div class='right'>></div>
  </div>
  <div class='buttons'>
  </div>
</div>

`;

const images = [
  "https://images.all-free-download.com/images/graphiclarge/canoe_water_nature_221611.jpg",
  "https://images.all-free-download.com/images/graphiclarge/tree_meadow_nature_220408.jpg",
  "https://images.all-free-download.com/images/graphicthumb/stones_pebble_nature_215149.jpg",
  "https://images.all-free-download.com/images/graphicthumb/beautiful_natural_scenery_02_hd_picture_166231.jpg"
];

const qs = document.querySelector.bind(document);
const Wrapper = qs(".wrapper");
const Views = qs(".view");
const Buttons = qs(".buttons");
const Left = qs(".left");
const Right = qs(".right");
let active = 0;
const Circles = [];

function focus() {
  document.querySelectorAll(".circle").forEach((ele) => {
    ele.classList.remove("highlight");
  });
  Circles[active].classList.add("highlight");
  Views.style.backgroundImage = `url(${Circles[active].dataset.link})`;
}

Left.onclick = function () {
  active--;
  if (active < 0) active += Circles.length;
  focus();
};

Right.onclick = function () {
  active++;
  active %= Circles.length;
  focus();
};

images.forEach((link, i) => {
  let circle = document.createElement("div");
  circle.dataset.link = link;
  Circles.push(circle);
  circle.classList.add("circle");
  if (!i) circle.classList.add("highlight");
  circle.onclick = function () {
    Views.style.backgroundImage = `url(${link})`;
    document.querySelectorAll(".circle").forEach((ele) => {
      ele.classList.remove("highlight");
    });
    this.classList.add("highlight");
    console.log(Views);
  };
  Buttons.appendChild(circle);
});
Views.style.backgroundImage = `url(${images[0]})`;
