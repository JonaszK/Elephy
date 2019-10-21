//jshint esversion:6

const menuChange = () => {
  const menuOpinions = document.querySelector('.course__opinions');
  const menuContent = document.querySelector('.course__content');
  const menuQuestions = document.querySelector('.course__questions');

  const contentBtn = document.querySelector('#course__menu-content');
  const opinionsBtn = document.querySelector('#course__menu-opinions');
  const questionsBtn = document.querySelector('#course__menu-questions');
  contentBtn.addEventListener('click', () => {
    menuContent.classList.add('display');
    if(menuOpinions.classList.contains('display')) {
      menuOpinions.classList.toggle('display');
    }
    if(menuQuestions.classList.contains('display')) {
      menuQuestions.classList.toggle('display');
    }
  });
  opinionsBtn.addEventListener('click', () => {
    menuOpinions.classList.add('display');
    if(menuContent.classList.contains('display')) {
      menuContent.classList.toggle('display');
    }
    if(menuQuestions.classList.contains('display')) {
      menuQuestions.classList.toggle('display');
    }
  });
  questionsBtn.addEventListener('click', () => {
    menuQuestions.classList.add('display');
    if(menuContent.classList.contains('display')) {
      menuContent.classList.toggle('display');
    }
    if(menuOpinions.classList.contains('display')) {
      menuOpinions.classList.toggle('display');
    }
  });
};

menuChange();
