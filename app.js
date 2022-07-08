const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    //Button click sets active class 
    //(get rid of class that isn't active)
    for(let i = 0; i < sectBtn.length; i++){
        //'this' keyword doesn't exist in arrow functions,
        //use function() instead
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            //'this' refers to this function
            this.className += ' active-btn';
        })
    }
}

PageTransitions();