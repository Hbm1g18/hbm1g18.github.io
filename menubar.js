var pixelsToScroll = 100;
var previousScrollTop = 0;
var animationPlayed = false;

function handleScroll() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Determine the scroll direction
  var scrollDirection = scrollTop > previousScrollTop ? 'down' : 'up';

  // Update the previous scroll position
  previousScrollTop = scrollTop;

  // Calculate the translation value based on the scroll position and direction
  var translationY = scrollDirection === 'down' ? Math.max(-pixelsToScroll, -scrollTop) : 0;

  // Trigger the animation
  animateMenu(translationY);
}

function animateMenu(translationY) {
  var menu = document.querySelector('.menu');
  if (menu) {
    menu.style.transition = 'transform 0.5s ease';
    menu.style.transform = 'translateY(' + translationY + 'px)';
  }
}

window.addEventListener("scroll", handleScroll);
