const closeBtn = document.querySelector(".arrow-btn");
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar-container");
const icon = document.getElementById("icon");

const closeDisplay = () => {
  sidebar.classList.toggle("wrap");

  icon.classList.replace("fa-angle-left", "fa-angle-right");
  icon.classList.add("position-btn");
};

const showSidebar = () => {
  if (icon.classList.contains("fa-angle-rigth")) {
    sidebar.classList.remove("wrap");
    icon.classList.replace("fa-angle-right", "fa-angle-left");
  }
};
const showDisplay = () => {
  sidebar.classList.remove("wrap");
  icon.classList.replace("fa-angle-right", "fa-angle-left");
};

closeBtn.addEventListener("click", closeDisplay);
menuBtn.addEventListener("click", showDisplay);
icon.addEventListener("click", showSidebar);
