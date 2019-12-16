//jshint esversion:6
const questionInfoDisplay = () => {
    document.querySelector('#question0').addEventListener('click', () => {
      document.querySelector('#info0').classList.toggle('display');
    });
    document.querySelector('#question1').addEventListener('click', () => {
      document.querySelector('#info1').classList.toggle('display');
    });
    document.querySelector('#question2').addEventListener('click', () => {
      document.querySelector('#info2').classList.toggle('display');
    });
};

questionInfoDisplay();
