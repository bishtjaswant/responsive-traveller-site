
/*
============================ Navigation js ================================
*/
let navMenu = document.querySelector('#nav__menu');
let navToggle = document.querySelector('#nav__toggle');
let navClose = document.querySelector('#nav__close');
let navLinks = document.querySelectorAll('.nav__link');



if (navToggle) {
    navToggle.addEventListener("click", function (e) {
        console.log('open nav')
        navMenu.style.right = "0";
        navToggle.style.display = "none";
        navClose.style.display = "block";
    });

    navToggle.removeEventListener('click', null, false);

}

if (navClose) {
    navClose.addEventListener("click", function (e) {
        console.log('close');
        navToggle.style.display = "block";
        nav__close.style.display = "none";
        navMenu.style.right = "-100rem";
    });
    navClose.removeEventListener('click', null, false);

}

navLinks.forEach(link=>{
    link.addEventListener("click", function (e) {
        nav__close.style.display = "none";
        navMenu.style.right="-100rem";
        navToggle.style.display = "block";
    });
    link.removeEventListener('click', null, false);

});


/*
if scroll down then change bg color of header
*/
window.addEventListener("scroll", function (e) {
   const header=  document.querySelector('#header');

     if ( window.scrollY >= 2){ 
         header.classList.add('add__header');
    }

    if ( window.scrollY===0){
        header.classList.remove('add__header');

    }

});

window.removeEventListener('scroll', null, false);

/* 
========================  swipper js=================
 */
var swiper = new Swiper(".descover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  /* =================================== video handling ====================================
   */

let vedio__file= document.querySelector('#vedio__file'),
   vedio__btn= document.querySelector('#vedio__btn'),
   video__icon =  document.querySelector('#video__icon');


function playVideo() {
    if ( vedio__file.paused ) {
        vedio__file.play();
        video__icon.classList.add("ri-pause-line") ;
        video__icon.classList.remove("ri-play-line"); 
    }else {
        vedio__file.pause();
        video__icon.classList.add("ri-play-line"); 
        video__icon.classList.remove("ri-pause-line"); 

    }
}

vedio__btn.addEventListener("click", playVideo );
/*
when video end */
function videoEnd( ) {
         video__icon.classList.add("ri-play-line"); 
        video__icon.classList.remove("ri-pause-line") ;
    
}
vedio__btn.addEventListener("ended", videoEnd  );


/**
 * ADD sscrollup menu when
 */
function scrollUP() {
    let scrollUP = document.querySelector('#scrollup');
    // let scrollupIcon= document.querySelector("#scrollup-icon")

    if ( window.scrollY >=200 ) {
           scrollUP.classList.add("show-scroll-up-icon");
    } else {
        scrollUP.classList.remove("show-scroll-up-icon");
    }
}

window.addEventListener("scroll", scrollUP );

/**
 * Active Scroll Bar
 */

function activeScroll(){
      let sections = document.querySelectorAll('section[id]');
      let  scrollY  = window.pageYOffset;

      sections.forEach( element => {
          let sectionTop = element.offsetTop - 50;
          let sectionHeight = element.offsetHeight;
          let sectionId = element.getAttribute('id');

          if (  scrollY > sectionTop  && scrollY<= sectionTop + sectionHeight ) {
              document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add("active__link");
          } else {
            document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove("active__link")
              
          }
      });
}

window.addEventListener("scroll", activeScroll );




