// const navMenu = document.getElementById("nav-menu-id");
// const navToggle = document.getElementById("nav-toggle-id");
// const navClose = document.getElementById("nav-close-id");
const navMenu = document.querySelector("#nav-menu-id");
const navToggle = document.querySelector("#nav-toggle-id");
const navClose = document.querySelector("#nav-close-id");

//SHOW Menu
if(navToggle){
   
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })    
}

function linkAction(){
    navMenu.classList.remove('show-menu');
}

//HIDE Menu when we click close
if(navClose){
   
    navClose.addEventListener('click', linkAction); 
}

//HIDE Menu when we click on any of the navigation links/menu options


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener('click', linkAction));

//array.forEach(element => console.log(element));
