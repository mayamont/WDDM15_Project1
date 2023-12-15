function Aboutit(a) {
  var texto =
    "The Canada Pension Plan (CPP) retirement pension is a monthly, taxable benefit that replaces part of your income when you retire. If you qualify, you’ll receive the CPP retirement pension for the rest of your life.<br> To qualify you must:";
  var texto2 =
    "Valid contributions can be either from work you did in Canada, or as the result of receiving credits from a former spouse or former common-law partner at the end of the relationship.";
  var texto3 =
    "Text from: <a href='https://www.canada.ca/en/services/benefits/publicpensions/cpp.html'>Canadian government website</a>";

  // Using jQuery function about it
  $('#texth1').html("About the plan");
  $('#requirements').removeAttr("hidden");
  $('#textpplan').removeAttr("hidden").html(texto);
  $('#textp2plan').html(texto2);
  $('#textp3plan').html(texto3);
  $('#infotable').attr("hidden", "hidden");
  $('#textpresult').attr("hidden", "hidden");
}

// result updated to Jquery
function Result(a) {
  $('#texth1').html("Summary");
  $('#textp2plan').attr("hidden", "hidden");
  $('#textp3plan').attr("hidden", "hidden");
  $('#textpplan').attr("hidden", "hidden");
  $('#requirements').attr("hidden", "hidden");
  $('#infotable').attr("hidden", "hidden");
  $('#textpresult').removeAttr("hidden");
}

// client info updated to Jquery
function ClientInfo(b) {
  $('#texth1').html("Today's qualification");
  $('#textpplan').html("");
  $('#textp2plan').html("");
  $('#textp3plan').html("");
  $('#infotable').removeAttr("hidden");
  $('#requirements').attr("hidden", "hidden");
  $('#textpresult').attr("hidden", "hidden");
}

// age check function JQuery
$(document).ready(function() {
  $("#age-check").on("click", function() {
    const ageCheck = prompt("Type your age");

    if (ageCheck === "65") {
      alert("You're at the standard age to retire!");
    } else if (ageCheck > "65") {
      alert("You've passed the standard age to retire!");
    } else if (ageCheck >= "60") {
      alert("You may be eligible to retire, although the standard age to retire is 65.");
    } else if (ageCheck < "60") {
      alert("You're too young!");
    }
  });
});

// Benefits button function JQuery
$("#benefits").on("click", function() {
  alert("STOP, CONSTRUCTION!!!! 🚧🛑🚜🛠️👷");
});

$.getJSON( "information.json", function( data ) {
    PeopleQualified = data.YearQualified + " or older";
    YearsQualified.innerHTML = PeopleQualified;
    YearToday.innerHTML = data.YearToday;
    age.innerHTML = data.age;
    postiveOutcome = "Congratulations! If you were born in " + data.YearQualified + ", you may be now qualified for retirement. To apply, go to canada website <a href='https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-benefit/apply.html'>here</a>";
    myElement15.innerHTML = postiveOutcome;

});

// carousel jquery selector
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = $(".mySlides");

  if (!slides || slides.length === 0) {
    console.error("No slides found.");
    return;
  }

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.css("display", "none");
  slides.eq(slideIndex).css("display", "block");
}

// Toggle theme JQuery
function toggleTheme() {
  $('body').toggleClass('theme-dark theme-light invert-text');
}

// fadeInElement JQuery
$(document).ready(function () {
  var fadeInElement = $('#fadeInElement');
  fadeInElement.css('display', 'block');
});

$(document).ready(function() {

  function animateText() {
   
    $('#animated-text').fadeOut(1000, function() {
    
      $(this).text('Thank you');
      
      $(this).fadeIn(1000);
    });
  }

  
  setInterval(animateText, 2000);
});


$(window).on('load', function () {
  const $loader = $('.loader-bar');
  const $loaderContainer = $('.loader-container');

  let progress = 0;
  const interval = setInterval(function () {
    // Increase progress more rapidly
    progress += Math.random() * 40;

    if (progress > 100) {
      clearInterval(interval);
      $loader.css('width', '100%');
      setTimeout(function () {
        $loaderContainer.addClass('loaded');
      }, 500);
    } else {
      $loader.css('width', progress + '%');
    }
  }, 50); // Decrease the interval duration
});

// JQUERY Animate Today's Qualification button
function animateSummary() {
  // Animate to the larger size
  $('#result').animate({
    fontSize: '1.5em', 
    opacity: 0.5,    
  }, 1000, function() {
    // Animate back to normal size
    $(this).animate({
      fontSize: '1em', 
      opacity: 1,      
    }, 1000);          
  });
}

function animateAbout() {
  // Animate to the larger size
  $('#About').animate({
    fontSize: '1.5em', 
    opacity: 0.5,    
  }, 1000, function() {
    // Animate back to normal size
    $(this).animate({
      fontSize: '1em', 
      opacity: 1,      
    }, 1000);          
  });
}

function animateClientInfo() {
  // Animate to the larger size
  $('#ClientInfo').animate({
    fontSize: '1.5em', 
    opacity: 0.5,    
  }, 1000, function() {
    // Animate back to normal size
    $(this).animate({
      fontSize: '1em', 
      opacity: 1,      
    }, 1000);          
  });
}


 // JQUERY slide down dropdown menu
 $(document).ready(function () {
  $('.dropdown').hover(function () {
      $(this).find('.dropdown-menu').slideDown();
  }, function () {
      $(this).find('.dropdown-menu').slideUp();
  });
});

$(document).ready(function () {
  // Set the initial state of the news section
  $('.news-section').css({
      'opacity': 0,
      'transform': 'translateY(50px)', // Initial position off-screen
  });

  // Function to check if an element is in the viewport
  function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to handle the animation when an element is in the viewport
  function handleScrollAnimation() {
      $('.news-section').each(function () {
          if (isElementInViewport(this)) {
              $(this).animate({
                  'opacity': 1,
                  'transform': 'translateY(0)', // Move to the original position
              }, 1000); // Animation duration in milliseconds
          }
      });
  }

  // Trigger the animation when the page is loaded
  handleScrollAnimation();

  // Trigger the animation when scrolling
  $(window).scroll(function () {
      handleScrollAnimation();
  });
});

// variables

const YearsQualified = document.getElementById("yearqualified");
const YearToday = document.getElementById("yeartoday");
$(document).ready(function() {
  const age = $("#age");
});
const myElement = $("#texth1");
const myElement2 = $("textpplan");
let myElement3 = document.getElementById("requirements");
let hidden = myElement3.getAttribute("hidden");
const myElement4 = $("textp2plan");
const myElement5 = document.getElementById("textp3plan");

const myElement6 = document.getElementById("texth1");
const myElement7 = document.getElementById("textpplan");
const myElement8 = document.getElementById("textp2plan");
const myElement9 = document.getElementById("textp3plan");
let myElement10 = document.getElementById("infotable");
let hidden2 = myElement10.getAttribute("hidden");

const myElement11 = document.getElementById("texth1");
const myElement12 = document.getElementById("textpplan");
const myElement13 = document.getElementById("textp2plan");
const myElement14 = document.getElementById("textp3plan");
const myElement15 = document.getElementById("textpresult");

let hidden3 = $("#textpresult").attr("hidden"); 