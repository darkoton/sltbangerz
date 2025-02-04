//< " CONNECTING JS COMPONENTS " >=============================================================================================================>//
import isWebp from './modules/webp.js'; //SUPPORT WEBP

import isDevice from './modules/device.js'; //DEFINE DEVICE

// import './modules/preloader.js'; // PRELOADER

// import "./modules/spoiler.js"  // SPOILERS

// import "./modules/dynamic_adap.js"  // DYNAMIC ADAPTIVE

// import "./modules/scroll_header.js"  // SCROLL HEADER

// import "./modules/swiper.js"  // SLIDER SWIPER

// import "./modules/animate_scroll.js"  // ANIMATE WITH SCROLL

// import "./modules/tabs.js"  // TABS

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
});
headerClose.addEventListener('click', () => {
  headerMenu.classList.remove('active');
});
