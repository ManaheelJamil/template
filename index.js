const mobile_nav = document.querySelector(".toggle-menu");
const header_nav = document.querySelector(".body");

const toggleNavbaropen = () => header_nav.classList.toggle("active");

mobile_nav.addEventListener("click", toggleNavbaropen);
