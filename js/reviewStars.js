const reviewStars = () => {
  var halfStars = document.querySelectorAll(".review__star-half");

  for(var i = 0; i < halfStars.length; i++) {
    halfStars[i].addEventListener("click", giveColor(i));
  }

  function giveColor(a) {
    return function(a) {
      var halfStars = document.querySelectorAll(".review__star-half");
      if(halfStars[a].style.color == "#fff") {
        for(var j = 0; j < a; j++) {
          halfStars[j].style.color = "#e8d254";
        }
      }
    }
  }
}

reviewStars();
