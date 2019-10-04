var functionsCards = document.querySelectorAll('.functions__card');

Array.prototype.forEach.call(functionsCards, function(el) {
  if(window.innerWidth < 901) {
    el.addEventListener('click', () => {
      el.classList.contains('functions__on-click') ? el.classList.remove('functions__on-click') : el.classList.add('functions__on-click');
    });
  }
});
