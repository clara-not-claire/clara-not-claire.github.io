// When the user scrolls the page, execute myFunction
window.onscroll = function() {scroll()};

// Get the header
var nav = document.getElementById("myHeader");

// Get the nav bar links
var about = document.getElementById("aboutNav");
var home = document.getElementById("homeNav");
var contact = document.getElementById("contactNav");
var work = document.getElementById("workNav");
var portfolio = document.getElementById("portfolioNav");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scroll() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
    about.classList.remove("colored");
    about.classList.add("white");

    home.classList.remove("colored");
    home.classList.add("white");

    work.classList.remove("colored");
    work.classList.add("white");

    contact.classList.remove("colored");
    contact.classList.add("white");

  //  whatIDo.classList.remove("colored");
  //  whatIDo.classList.add("white");

    portfolio.classList.remove("colored");
    portfolio.classList.add("white");

  } else {
    nav.classList.remove("sticky");
    about.classList.add("colored");
    about.classList.remove("white");

    home.classList.add("colored");
    home.classList.remove("white");

    work.classList.add("colored");
    work.classList.remove("white");

    contact.classList.add("colored");
    contact.classList.remove("white");

  //  whatIDo.classList.add("colored");
  //  whatIDo.classList.remove("white");

    portfolio.classList.add("colored");
    portfolio.classList.remove("white");
  }
}
