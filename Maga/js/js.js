/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

// skaf knappen
let mybutton = document.getElementById("myBtn");

// knaper er synlig efter 20 px er scrollede 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// når knappen bliver klikket scroller den til toppen
function topFunction() {
  document.body.scrollTop = 0; // til Safari
  document.documentElement.scrollTop = 0; // til Chrome, Firefox, IE and Opera
}
