window.onscroll = function() {giveClass()};

var nav = document.getElementById("nav");
var x = document.getElementById("navbarStick");
var offset = x.offsetTop;

var els= document.getElementsByClassName("course-card__image");
var width = els[0].offsetWidth;

// courses thumbnail size

Array.prototype.forEach.call(els, function(el) {
  el.style.height = width * 0.5625 + "px";
});

window.onresize = resize;

function resize() {
  Array.prototype.forEach.call(els, function(el) {
    var width = els[0].offsetWidth;
    el.style.height = width * 0.5625 + "px";
  });
}

// detect navbar

function giveClass() {
  if (window.pageYOffset > offset) {
    nav.classList.add("navbar-fixed");
    x.style.marginTop = "69px";
  }
}
