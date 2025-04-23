
// scrolling effect for navbar at 0px
// when the page is scrolled down, the navbar will be fixed at the top of the page
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if(this.window.scrollY > 0 ){ 
        navbar.classList.add('fixed');
    }else{
        navbar.classList.remove('fixed');
    }
})

// Dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const darkModeIcon = document.querySelector('.dark-mode-icon');
const lightModeIcon = document.querySelector('.light-mode-icon');

// dropdown menu for mobile
const dropdown = document.querySelector('.dropdown');
const drop_down = document.querySelector('.drop-down');
const navigate = document.querySelector('.navigate');
const dropcap = document.getElementById('dropcap');

dropcap.addEventListener('click', () =>{
    drop_down.classList.toggle('active');
    navigate.classList.toggle('rotate');

})

const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.mat');
const close = document.querySelector('.close');

menu.addEventListener('click',() =>{
    navbar.classList.toggle('showsidebar');
})

close.addEventListener('click',() =>{
    navbar.classList.remove('showsidebar');
});

//Scroll Animation on different elements 
const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    })
})

const section = document.querySelectorAll('.section');
const Section = document.querySelectorAll('#section');
Section.forEach((el) => observer.observe(el));
section.forEach((el) => observer.observe(el));
//Scroll animations end here considering the classes and ids.

//Dark mode
const wrapper = document.getElementById('wrapper');
const mode_btn = document.getElementById('mode-btn');
const bodyEl = document.querySelector('body');

wrapper.addEventListener('click',() => {
    mode_btn.classList.toggle('dark');
    bodyEl.classList.toggle('switchBgCol');
})