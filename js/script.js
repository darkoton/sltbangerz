//< " CONNECTING JS COMPONENTS " >=============================================================================================================>//
import isWebp from './modules/webp.js'; //SUPPORT WEBP

import isDevice from './modules/device.js'; //DEFINE DEVICE

// import './modules/preloader.js'; // PRELOADER

import './modules/spoiler.js'; // SPOILERS

// import "./modules/dynamic_adap.js"  // DYNAMIC ADAPTIVE

// import "./modules/scroll_header.js"  // SCROLL HEADER

import './modules/swiper.js'; // SLIDER SWIPER

// import "./modules/animate_scroll.js"  // ANIMATE WITH SCROLL

import './modules/tabs.js'; // TABS

// import "./modules/parallax.js"  // PARALLAX EFFECT

//< " СКРИПТЫ " >=============================================================================================================>//

isWebp();
isDevice();

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

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});
