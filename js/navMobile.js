const navSlide = () => {
  const burger = document.querySelector('.nav-mobile__burger');
  const navMobile = document.querySelector('.nav-mobile');
  const wrapper = document.querySelector('#body--filter');
  const l1 = document.querySelector('.line1');
  const l2 = document.querySelector('.line2');
  const l3 = document.querySelector('.line3');

  burger.addEventListener('click', () => {
    navMobile.classList.toggle('nav-mobile__active');
    wrapper.classList.toggle('body--filter');
    l1.classList.toggle('line1-active');
    l2.classList.toggle('line2-active');
    l3.classList.toggle('line3-active');
    burger.classList.toggle('burger-active');
  });
};

navSlide();
