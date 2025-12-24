const closeBtn = document.querySelector(".arrow-btn");
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar-container");
const icon = document.getElementById("icon");

const closeDisplay = () => {
  const isWrap = sidebar.classList.contains("wrap");

  if (isWrap) {
    sidebar.classList.remove("wrap");
    icon.classList.replace("fa-angle-right", "fa-angle-left");
    icon.classList.remove("position-btn");
  } else {
    sidebar.classList.toggle("wrap");

    icon.classList.replace("fa-angle-left", "fa-angle-right");
    icon.classList.add("position-btn");
  }
};

// const showSidebar = () => {
//   if (icon.classList.contains("fa-angle-right")) {
//     sidebar.classList.remove("wrap");
//     icon.classList.replace("fa-angle-right", "fa-angle-left");
//     icon.classList.remove("position-btn");
//   }
// };
const showDisplay = () => {
  sidebar.classList.remove("wrap");
  icon.classList.replace("fa-angle-right", "fa-angle-left");
  icon.classList.remove("position-btn");
};

closeBtn.addEventListener("click", closeDisplay);
menuBtn.addEventListener("click", showDisplay);
// icon.addEventListener("click", showSidebar);
