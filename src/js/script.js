//< " CONNECTING JS COMPONENTS " >=============================================================================================================>//
@@include("./modules/webp.js"); //SUPPORT WEBP

@@include("./modules/device.js"); //DEFINE DEVICE

/* @@include("./modules/preloader.js"); */ // PRELOADER

/* @@include("./modules/dynamic_adap.js") */  // DYNAMIC ADAPTIVE

/* @@include("./modules/scroll_header.js") */  // SCROLL HEADER

@@include("./modules/swiper.js"); // SLIDER SWIPER

/* @@include "./modules/animate_scroll.js" */  // ANIMATE WITH SCROLL

@@include("./modules/tabs.js"); // TABS

/* @@include("./modules/parallax.js") */  // PARALLAX EFFECT

//< " СКРИПТЫ " >=============================================================================================================>//

// Header burger

const headerOpen = document.querySelector(".header__burger");
const headerClose = document.querySelector(".header__close");
const headerMenu = document.querySelector(".header__menu");

headerOpen.addEventListener("click", () => {
  headerMenu.classList.add("active");
  document.body.classList.add("_lock-scroll");
});
headerClose.addEventListener("click", () => {
  headerMenu.classList.remove("active");
  document.body.classList.remove("_lock-scroll");
});

// Fixed header
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// Anchors

const links = document.querySelectorAll("[data-link-anchor]");
let anchorsActive = false

links.forEach(link => {
  link.addEventListener("click", e => {
    anchorsActive = true
    e.preventDefault();

    const id = link.getAttribute("href");

    const scrollTarget = document.getElementById(id);

    links.forEach(l => {
      l.classList.remove("active");
    });

    if (scrollTarget) {
      const topOffset = 5;
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      const offsetPosition = elementPosition - topOffset - header.clientHeight;

      link.classList.add("active");

      headerMenu.classList.remove("active");
      document.body.classList.remove("_lock-scroll");
      
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      anchorsActive = false
    }, 500);
  });
});


window.addEventListener("scroll", () => {
  if (anchorsActive) {
    return;
  }
  
  links.forEach(link => {
      const id = link.getAttribute("href");
  
      const target = document.getElementById(id);
  
      if (target) {
        
        const topOffset = target.getBoundingClientRect().top + 100;
        
        if (topOffset < window.innerHeight / 2 && topOffset >= -target.clientHeight / 2) {
          links.forEach(l => l.classList.remove("active")); 
          link.classList.add("active");
        }
      }
  });
})