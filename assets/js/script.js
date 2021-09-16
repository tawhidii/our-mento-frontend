const toggle = document.getElementById("toggle");
const navbar = document.getElementById("nav");
      toggle.onclick = function () {
        toggle.classList.toggle("active");
        navbar.classList.toggle("activenav");
      };