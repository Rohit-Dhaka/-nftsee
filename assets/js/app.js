const navmenu = document.querySelector(".menu");
const menu_icon = document.querySelector(".menu_icon");
menu_icon.addEventListener ("click" , mobilemenu);
function mobilemenu(){
    navmenu.classList.toggle("active");
    menu_icon.classList.toggle("active");
}