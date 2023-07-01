AOS.init({
  duration: 1200,
});

const heading = document.getElementById("heading");
const imgComputer = document.getElementById("imgComputer");
const btnConnect = document.getElementById("btnConnect");

heading.style.display = "none";
btnConnect.style.display = "none";

window.addEventListener("scroll", function () {
  let value = this.scrollY;
  heading.style.display = "block";
  btnConnect.style.display = "block";

  heading.style.left = (value + 22) / 6 + "%";
  heading.style.bottom = (value + 44) / 2 + "%";

  btnConnect.style.left = (value + 22) / 6 + "%";
  btnConnect.style.bottom = (value + 44) / 2 + "%";

  imgComputer.style.bottom = value * 3 + "px";
});
