var pixelsToScroll = 100;
var previousScrollTop = 0;

function handleScroll() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var scrollDirection = scrollTop > previousScrollTop ? 'down' : 'up';
  previousScrollTop = scrollTop;
  var translationY = scrollDirection === 'down' ? Math.max(-pixelsToScroll, -scrollTop) : 0;
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

// Hamburger toggle for mobile nav
document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector('.mobile-box');
  var menu = document.querySelector('.menu');
  var menuContainers = document.querySelectorAll('#right-side .menucontainer');

  // Hide menu container links (About) that have no href
  menuContainers.forEach(function(mc) {
    var link = mc.querySelector('a');
    if (!link) {
      mc.style.cursor = 'default';
    }
  });

  // Set scroller-holder widths to match text
  menuContainers.forEach(function(mc) {
    var text = mc.querySelector('.container-text');
    var sh = mc.querySelector('.scroller-holder');
    if (text && sh) {
      sh.style.width = window.getComputedStyle(text).width;
    }
  });

  // Hamburger toggle
  if (hamburger && menu) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('.menucontainer a').forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('menu-open');
      });
    });
  }
});
