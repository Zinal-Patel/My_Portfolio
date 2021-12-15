/*=============Show menu when we click on toggle icon and close when clicked on close icon starts here...================*/

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



