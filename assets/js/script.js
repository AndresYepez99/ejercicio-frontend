'use strict';
/* DOM Elements */
const navbar = document.querySelector('.navbar');
const btnMenuOpen = document.querySelector('.header__btn-menu-open');
const btnMenuClose = document.querySelector('.navbar__btn-menu-close');
const bannerImage = document.querySelector('.banner__image');

/* Funtions */
const toggleNavbar = () => {
  navbar.classList.toggle('open');
};

const updateBannerImage = () => {
  bannerImage.src =
    window.innerWidth < 1290
      ? 'assets/images/image-web-3-mobile.jpg'
      : 'assets/images/image-web-3-desktop.jpg';
};

/* Event Handlers */

btnMenuOpen.addEventListener('click', toggleNavbar);
btnMenuClose.addEventListener('click', toggleNavbar);
window.addEventListener('resize', updateBannerImage);

