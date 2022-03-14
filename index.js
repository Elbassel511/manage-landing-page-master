const navBtn = document.querySelector('.hamburger');
const navBtnImg = document.querySelector('.hamburger img')
const navMenu = document.querySelector('.nav--menu');
const layer = document.querySelector('.layer');
let isMenuOpened = false


const carsoulController = document.querySelector('.carosuel--controller')
const carsoulDots = Array.from(carsoulController.children)
const testimonialCarousel = document.querySelector('.testimonial--carousel');
const cards = Array.from (testimonialCarousel.children);
const cardWidth = cards[0].getBoundingClientRect().width;


// nav menu functionality for mobile view
navBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (!isMenuOpened){
        navBtnImg.setAttribute('src','./images/icon-close.svg')
        isMenuOpened = true;
        navMenu.style.transform = 'translateX(0)'
        layer.classList.add('show')
    } else {
        navBtnImg.setAttribute('src','./images/icon-hamburger.svg')
        isMenuOpened = false;
        navMenu.style.transform = 'translateX(120%)'
        layer.classList.remove('show')
    }
})    

// carsoul navigation funstionality

carsoulController.addEventListener('click',(e)=>{
    if(!e.target.closest('a')) return;
    e.preventDefault()
    const targetCardIndex = carsoulDots.findIndex(card => card == e.target.closest('a'));
    // const currentCard = carsoulController.querySelector('.current');
    // const currentCardIndex = carsoulDots.findIndex(card => card == currentCard );
    
    // carsoulDots[targetCardIndex].classList.add('current');
    // carsoulDots[currentCardIndex].classList.remove('current');
    
    // let scrollValue = (cardWidth  + 30)*(targetCardIndex - currentCardIndex);
    
    // testimonialCarousel.scrollBy(scrollValue,0)
    carsoulScroll(targetCardIndex )

})

function carsoulScroll (targetIdx){
    const currentCard = carsoulController.querySelector('.current');
    const currentCardIndex = carsoulDots.findIndex(card => card == currentCard );
    if (targetIdx===undefined) {
        targetIdx = (currentCardIndex == (cards.length-1)) ? 0 : currentCardIndex + 1 
    }


    carsoulDots[targetIdx].classList.add('current');
    carsoulDots[currentCardIndex].classList.remove('current');
    
    let scrollValue = (cardWidth  + 30)*(targetIdx- currentCardIndex);
    
    testimonialCarousel.scrollBy(scrollValue,0)


}

// carsoul autoplay 

let carsoulAutoPlay = setInterval(carsoulScroll,4000)
