//jshint esversion:6

const showAndHide = () => {
  var sections = document.querySelectorAll('.course-content__section');

  for(var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", callback(i));
  }
};

function callback(i) {
  return function() {
    var lessons = document.querySelectorAll('.course-content__lessons-box');
    lessons[i].classList.toggle('display');
  };
}

showAndHide();
