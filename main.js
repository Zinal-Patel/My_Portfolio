/*=============Show menu when we click on toggle icon and close when clicked on close icon starts here...================*/

const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

//SHOW Menu
if(navToggle){
   
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })    
}

function removeMenu(){
    navMenu.classList.remove('show-menu');
}

//HIDE Menu when we click close
if(navClose){
   
    navClose.addEventListener('click', removeMenu); 
}

//HIDE Menu when we click on any of the navigation links/menu options


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(n => n.addEventListener('click', removeMenu));
//array.forEach(element => console.log(element));

/*=============Show menu when we click on toggle icon and close when clicked on close icon ends here...================*/



/*=============Opening the Skills heading that we click on and closing the rest starts here..================*/

const skillsContent = document.querySelectorAll('.skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');


function toggleSkills(){

    let parentClassName = this.parentNode.className;

    //the folowing for loop sets the class name of all the elements of the 'skillsContent' array to 'skills-content skills-close'
    for(i = 0; i < skillsContent.length;  i++){
        skillsContent[i].className = 'skills-content skills-close';
    }

    //if the class name of the parent node is 'skills-content skills-close', then the if block will set it to 'skills-content skills-open'.
    if(parentClassName === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open';
    }

    }

// when we click on the skills header, toggleSkills function is executed
skillsHeader.forEach((sH) => {sH.addEventListener('click', toggleSkills )})

//Basically what we did in the toggleSkills funtion is that we first set the class name of all the skills heading to 'skills-content skills-close' using the for loop. 
//So that when we click on any of the skills heading, all the skills heading will close ( because of the css properties set for 'skills-close' class).

//Further, using the if block, we then set the class name of the parent node to 'skills-content skills-open' if it was 'skills-content skills-close'. So the skills heading that we have clicked on, opens up ( because of the css properties set for 'skills-open' class).

/* The 'className' property sets or returns the class name of an element.


Return the className property:

HTMLElementObject.className
Set the className property:

HTMLElementObject.className = class*/


/*=============Opening the Skills heading that we click on and closing the rest ends here..================*/


const qualificationTabs = document.querySelectorAll('[data-target]');
//selecting an html element by is attribut name
const qualificationContents = document.querySelectorAll('[data-content]');
//selecting an html element by is attribut name




qualificationTabs.forEach(tab => 
    
    tab.addEventListener('click', () => {

        const target= document.querySelector(tab.dataset.target);

        //when we click on any of the tab, the class 'qualification-active' will be removed from all the elements of the array qualificationContents
        qualificationContents.forEach(content => {
            content.classList.remove('qualification-active')
        })
        
        
        target.classList.add('qualification-active');

        qualificationTabs.forEach(tab => {
            tab.classList.remove('qualification-active');
        })

        tab.classList.add('qualification-active')


}));


//SERVICES

const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

//The 'modalOpen' function adds 'active-modal' class to the item of that 'modalViews' array whose index is passed as the parameter of the funtion
let modalOpen = function(i){
    modalViews[i].classList.add('active-modal');
}

//Adding click event on each button/element of the 'modalBtns' array. On click, the 'modalOpen' function is executed. Whichever button we click on, its index will be passed as the parameter of the 'modalOpen' function. So respective modalView opens up.
modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modalOpen(i);
    })
})

//The 'modalClose' function removes 'active-modal' class from all the items of the 'modalViews' array.
let modalClose = function(){

    modalViews.forEach(modalView => {
        modalView.classList.remove('active-modal');
    })
}

//Adding click event on each element of the 'modalCloses' array. On click, the 'modalClose' function is executed. No matter what close button we click on, all the modalView will be closed.
modalCloses.forEach((modalCls) => modalCls.addEventListener('click', modalClose ))


/*SWIPER Portfolio*/

let swiperPortfolio = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     
  });

/* SWIPER Testimonial*/

  let swiperTestimonial = new Swiper(".testimonial-container", {
    loop: true,
    grabCursor: true, 
    spaceBetween: 48, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
     breakpoints:{
         568:{
             slidesPerView: 2,
         }
     }
  });

  /* Scroll section active */

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){

    const scrollY = window.pageYOffset


    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        var sectionId = current.getAttribute('id')


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        }else{

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

         
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollUp(){
    const scrollY = window.pageYOffset

    const scrollUpArrow = document.querySelector('#scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560){
     scrollUpArrow.classList.add('show-scroll');
    }

    else {
          scrollUpArrow.classList.remove('show-scroll')
      }
}
window.addEventListener('scroll', scrollUp)