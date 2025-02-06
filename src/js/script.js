//< " CONNECTING JS COMPONENTS " >=============================================================================================================>//
@import './src/js/modules/webp.js'; //SUPPORT WEBP

@import './src/js/modules/device.js'; //DEFINE DEVICE

/* @import './src/js/modules/preloader.js'; */ // PRELOADER

@import './src/js/modules/spoiler.js'; // SPOILERS

/* @import "./src/js/modules/dynamic_adap.js" */  // DYNAMIC ADAPTIVE

/* @import "./src/js/modules/scroll_header.js" */  // SCROLL HEADER

@import './src/js/modules/swiper.js'; // SLIDER SWIPER

/* @import "./src/js/modules/animate_scroll.js" */  // ANIMATE WITH SCROLL

@import './src/js/modules/tabs.js'; // TABS

/* @import "./src/js/modules/parallax.js" */  // PARALLAX EFFECT

//< " СКРИПТЫ " >=============================================================================================================>//

// Header burger

const headerOpen = document.querySelector('.header__burger');
const headerClose = document.querySelector('.header__close');
const headerMenu = document.querySelector('.header__menu');

headerOpen.addEventListener('click', () => {
  headerMenu.classList.add('active');
  document.body.classList.add('_lock-scroll');
});
headerClose.addEventListener('click', () => {
  headerMenu.classList.remove('active');
  document.body.classList.remove('_lock-scroll');
});

// Fixed header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

// Anchors

const links = document.querySelectorAll('[data-link-anchor]');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const id = link.getAttribute('href');

    const scrollTarget = document.getElementById(id);

    links.forEach(l => {
      l.classList.remove('active');
    });

    if (scrollTarget) {
      const topOffset = 5;
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      const offsetPosition = elementPosition - topOffset - header.clientHeight;

      link.classList.add('active');
      headerMenu.classList.remove('active');
      document.body.classList.remove('_lock-scroll');
      console.log(offsetPosition);
      
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});


window.addEventListener('scroll', () => {
  links.forEach(link => {
      const id = link.getAttribute('href');
  
      const target = document.getElementById(id);
  
      if (target) {
        const topOffset = target.getBoundingClientRect().top - header.clientHeight;
        
        if (topOffset < window.innerHeight / 2 && topOffset >= -target.clientHeight / 2) {
          links.forEach(l => l.classList.remove('active')); 
          link.classList.add('active');
        }
      }
  });
})