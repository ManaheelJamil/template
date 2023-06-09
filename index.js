const mobile_nav = document.querySelector(".toggle-menu")
const header_nav = document.querySelector(".body")
const toggleNavbaropen=()=>{
        header_nav.classList.add('active');   
}
mobile_nav.addEventListener("click",()=> toggleNavbaropen())
const toggleNavbarclose=()=>{
        header_nav.classList.remove("toggle");
        console.log("remove")
}
mobile_nav.addEventListener("click",()=> toggleNavbarclose())
