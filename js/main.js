(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
  }; 
}());

// Burger handler

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.nav');
  const menuClose = document.querySelector('.nav__close');
   burgerItem.addEventListener('click', ()=> {
     menu.classList.add('nav_active');
   });
   menuClose.addEventListener('click', ()=>  {
     menu.classList.remove('nav_active');
   });
}());