const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args)
    };
};

const target = document.querySelectorAll('[data-anime]');
const animete = 'animate';

function animeScroll(){
    const windowTop = window.scrollY + (window.innerHeight * 3) /4;
    target.forEach(function(element){
        
        if((windowTop) > element.offsetTop){
            element.classList.add(animete);
        }
        // console.log(element.offsetTop);
    })
}

window.addEventListener('scroll', debounce(function(){
    animeScroll();
}, 200));