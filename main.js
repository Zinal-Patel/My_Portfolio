const navMenu = document.getElementById("nav-menu-id");
const navToggle = document.getElementById("nav-toggle-id");
const navClose = document.getElementById("nav-close-id");

/* MENU SHOW*/
/* validate if const exists*/

if(navToggle){
   
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })    
}

/* MENU Hidden*/
/* validate if const exists*/

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}