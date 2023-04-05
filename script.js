// slideshow
var slideImages = document.getElementsByClassName("slide");
var counter = 0; //set index for timer
var duration = 2000; //set duration

//Hide each slide at first
function hideAllImages() {
  for (var i = 0; i < slideImages.length; i = i + 1) {
    /* console.log(slideImages[i]); */
    slideImages[i].style.opacity = 0;
  }
}

function slideshow() {
  hideAllImages();

  /* go to next slide */
  counter = counter + 1;

  /* reset to first slide when looping */
  if (counter > slideImages.length - 1) {
    counter = 0;
  }

  console.log(counter);

  /* show the current slide */
  slideImages[counter].style.opacity = 1;
}

setInterval(function() {
    slideshow();
}, duration);