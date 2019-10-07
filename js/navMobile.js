const navSlide = () => {
  const burger = document.querySelector('.nav-mobile__burger');
  const navMobile = document.querySelector('.nav-mobile');

  burger.addEventListener('click', () => {
    navMobile.classList.toggle('nav-mobile__active');
  });
};

navSlide();
