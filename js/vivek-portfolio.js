$(function() {

  "use strict";

  // swup js
  const options = {
    containers: ["#swup", "#swupMenu"],
    animateHistoryBrowsing: true,
  };

  const swup = new Swup(options);

  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector('#scrollbar'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector('#scrollbar2'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  // page loading
  $(document).ready(function() {
    anime({
      targets: '.art-preloader .art-preloader-content',
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: 'linear',
      complete: function(anim) {

      }
    });
    anime({
      targets: '.art-preloader',
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: 'linear',
      complete: function(anim) {
        $('.art-preloader').css('display', 'none');
      }
    });
  });

  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(1);

  // counters
  anime({
    targets: '.art-counter-frame',
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: 'linear',
  });

  anime({
    targets: '.art-counter',
    delay: 1300,
    opacity: [1, 1],
    complete: function(anim) {
      $('.art-counter').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'linear',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });

  // progressbars
  var bar = new ProgressBar.Circle(circleprog1, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2500,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  bar.animate(1);

  var bar = new ProgressBar.Circle(circleprog2, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2600,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  bar.animate(0.9);

  var bar = new ProgressBar.Circle(circleprog3, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2700,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  bar.animate(0.7);

  var bar = new ProgressBar.Line(lineprog1, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2800,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.9);

  var bar = new ProgressBar.Line(lineprog2, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 2900,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.65);

  var bar = new ProgressBar.Line(lineprog3, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3000,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.90);

  var bar = new ProgressBar.Line(lineprog4, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3100,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.90);

  var bar = new ProgressBar.Line(lineprog5, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.8);

  var bar = new ProgressBar.Line(lineprog6, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.7);

  var bar = new ProgressBar.Line(lineprog7, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(.95);

  // Contact form
  $('.art-input').keyup(function() {
    if ($(this).val()) {
      $(this).addClass('art-active');
    } else {
      $(this).removeClass('art-active');
    }
  });

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {

      var tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl
        .add({
          targets: '.art-submit',
          opacity: 0,
          scale: .5,
        })
        .add({
          targets: '.art-success',
          scale: 1,
          height: '45px',
        })
    });
    return false;
  });

  // portfolio filter
  $('.art-filter a').on('click', function() {
    $('.art-filter .art-current').removeClass('art-current');
    $(this).addClass('art-current');

    var selector = $(this).data('filter');
    $('.art-grid').isotope({
      filter: selector
    });
    return false;
  });

  // masonry Grid
  $('.art-grid').isotope({
    filter: '*',
    itemSelector: '.art-grid-item',
    transitionDuration: '.6s',
  });

  // slider testimonials
  var swiper = new Swiper('.art-testimonial-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-testi-swiper-next',
      prevEl: '.art-testi-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider works
  var swiper = new Swiper('.art-works-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-works-swiper-next',
      prevEl: '.art-works-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider blog
  var swiper = new Swiper('.art-blog-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-blog-swiper-next',
      prevEl: '.art-blog-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "thumbs",
      "close"
    ],
  });

  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "close"
    ],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $.fancybox.defaults.hash = false;

  $('.current-menu-item a').clone().appendTo('.art-current-page');

  $('.art-map-overlay').on('click', function() {
    $(this).addClass('art-active');
  });

  $('.art-info-bar-btn').on('click', function() {
    $('.art-info-bar').toggleClass('art-active');
    $('.art-menu-bar-btn').toggleClass('art-disabled');
  });

  $('.art-menu-bar-btn').on('click', function() {
    $('.art-menu-bar-btn , .art-menu-bar').toggleClass("art-active");
    $('.art-info-bar-btn').toggleClass('art-disabled');
  });

  $('.art-info-bar-btn , .art-menu-bar-btn').on('click', function() {
    $('.art-content').toggleClass('art-active');
  });

  $('.art-curtain , .art-mobile-top-bar').on('click', function() {
    $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
  });

  $('.menu-item').on('click', function() {
    if ($(this).hasClass('menu-item-has-children')) {
      $(this).children('.sub-menu').toggleClass('art-active');
    } else {
      $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
    }
  });

  // reinit
  document.addEventListener("swup:contentReplaced", function() {

    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scrollbar'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector('#scrollbar2'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    $("#form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {

        var tl = anime.timeline({
          easing: 'easeOutExpo',
        });

        tl
          .add({
            targets: '.art-submit',
            opacity: 0,
            scale: .5,
          })
          .add({
            targets: '.art-success',
            scale: 1,
            height: '45px',
          })
      });
      return false;
    });

    // Masonry Grid
    $('.art-grid').isotope({
      filter: '*',
      itemSelector: '.art-grid-item',
      transitionDuration: '.6s',
    });

    $('.art-filter a').on('click', function() {
      $('.art-filter .art-current').removeClass('art-current');
      $(this).addClass('art-current');

      var selector = $(this).data('filter');
      $('.art-grid').isotope({
        filter: selector
      });
      return false;
    });

    anime({
      targets: '.art-counter-frame',
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: 'linear',
    });

    $('.art-counter').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'linear',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

    // slider testimonials
    var swiper = new Swiper('.art-testimonial-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: false,
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-testi-swiper-next',
        prevEl: '.art-testi-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        }
      },
    });

    // slider works
    var swiper = new Swiper('.art-works-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-works-swiper-next',
        prevEl: '.art-works-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    // slider blog
    var swiper = new Swiper('.art-blog-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-blog-swiper-next',
        prevEl: '.art-blog-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close"
      ],
    });

    $('[data-fancybox="diplome"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $.fancybox.defaults.hash = false;

    $('.current-menu-item a').clone().prependTo('.art-current-page');

    $('.menu-item').on('click', function() {
      if ($(this).hasClass('menu-item-has-children')) {
        $(this).children('.sub-menu').toggleClass('art-active');
      } else {
        $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
      }
    });

  })

  /* -------------------------------------------

  demo

  ------------------------------------------- */
  var demo = '<style>.color-change{top: 30vh; right: -50px; padding: 5px 5px 0; background-color: rgba(250,250,252,1); position: fixed; z-index: 99999999999999999999999999999999; border-radius: 0 0 2px 0; -webkit-transition: .3s ease-in-out; transition: .3s ease-in-out;}.active-changer{right: 0;}.swapColor{height: 40px; width: 40px; display: block; margin-bottom: 5px; border-radius: 1px; filter: brightness(100%); -webkit-transition: .3s ease-in-out; transition: .3s ease-in-out;}.swapColor:hover{filter: brightness(110%);}.swapOverlay{height: 40px; width: 40px; display: block; margin-bottom: 10px; border-radius: 1px;}.green{background-color: #4CAF50;}.red{background-color: #f44336;}.blue{background-color: #64B5F6;}.orange{background-color: #FFC107;}.open-changer{cursor: pointer; position: absolute; background-color: rgba(250,250,252,1); height: 40px; width: 40px; top: 0; left: -40px; color: rgba(32,32,42,1); display: flex; justify-content: center;}.open-changer i{align-self: center; animation: rotate 2s infinite linear;}@keyframes rotate{0%{transform: rotate(0);}100%{transform: rotate(360deg);}}.demo-card{width: 100%;}.demo-frame{margin: 0;}@media (max-width: 768px){.demo-frame{margin-left: -15px; margin-right: -15px;}}</style> <div class="color-change"> <div class="open-changer"><i class="fas fa-cog"></i></div><a href="javascript:void(0)" class="swapColor orange" data-theme="orange"></a> <a href="javascript:void(0)" class="swapColor red" data-theme="red"></a> <a href="javascript:void(0)" class="swapColor green" data-theme="green"></a> <a href="javascript:void(0)" class="swapColor blue" data-theme="blue"></a></div>';

  $('body').prepend(demo);

  var sheets = {
    orange: $('<link rel="stylesheet" href="css/color-1.css">'),
    red: $('<link rel="stylesheet" href="css/color-2.css">'),
    green: $('<link rel="stylesheet" href="css/color-3.css">'),
    blue: $('<link rel="stylesheet" href="css/color-4.css">'),
  };

  var sheets2 = {
    blueoverlay: $('<link rel="stylesheet" href="css/overlay-color/blue.css">'),
    violetoverlay: $('<link rel="stylesheet" href="css/overlay-color/violet.css">'),
  };

  var currentSheet = sheets.orange.appendTo($("head"));

  $("a.swapColor").click(function() {
    currentSheet.detach();
    currentSheet = (sheets[$(this).attr("data-theme")]).appendTo($("head"));
  });

  $('.open-changer').click(function() {
    $('.color-change').toggleClass("active-changer");
  });

  $('.art-app').click(function() {
    $('.color-change').removeClass("active-changer");
  });

  /* -------------------------------------------

  demo end

  ------------------------------------------- */

});

 // Array to store our Snowflake objects
 var snowflakes = [];

 // Global variables to store our browser's window size
 var browserWidth;
 var browserHeight;

 // Specify the number of snowflakes you want visible
 var numberOfSnowflakes = 50;

 // Flag to reset the position of the snowflakes
 var resetPosition = false;

 //
 // It all starts here...
 //
 function setup() {
   window.addEventListener("DOMContentLoaded", generateSnowflakes, false);
   window.addEventListener("resize", setResetFlag, false);
 }
 setup();

 //
 // Constructor for our Snowflake object
 //
 function Snowflake(element, speed, xPos, yPos) {
   // set initial snowflake properties
   this.element = element;
   this.speed = speed;
   this.xPos = xPos;
   this.yPos = yPos;

   // declare variables used for snowflake's motion
   this.counter = 0;
   this.sign = Math.random() < 0.5 ? 1 : -1;

   // setting an initial opacity and size for our snowflake
   this.element.style.opacity = .1 + Math.random();
   this.element.style.fontSize = 12 + Math.random() * 50 + "px";
 }

 //
 // The function responsible for actually moving our snowflake
 //
 Snowflake.prototype.update = function () {

   // using some trigonometry to determine our x and y position
   this.counter += this.speed / 5000;
   this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
   this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;

   // setting our snowflake's position
   setTranslate(Math.round(this.xPos), Math.round(this.yPos), this.element);

   // if snowflake goes below the browser window, move it back to the top
   if (this.yPos > browserHeight) {
     this.yPos = -50;
   }
 }

 //
 // A performant way to set your snowflake's position
 //
 function setTranslate(xPos, yPos, el) {
   el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
 }

 //
 // The function responsible for creating the snowflake
 //
 function generateSnowflakes() {

   // get our snowflake element from the DOM and store it
   var originalSnowflake = document.querySelector(".snowflake");

   // access our snowflake element's parent container
   var snowflakeContainer = originalSnowflake.parentNode;

   // get our browser's size
   browserWidth = document.documentElement.clientWidth;
   browserHeight = document.documentElement.clientHeight;

   // create each individual snowflake
   for (var i = 0; i < numberOfSnowflakes; i++) {

     // clone our original snowflake and add it to snowflakeContainer
     var snowflakeClone = originalSnowflake.cloneNode(true);
     snowflakeContainer.appendChild(snowflakeClone);

     // set our snowflake's initial position and related properties
     var initialXPos = getPosition(50, browserWidth);
     var initialYPos = getPosition(50, browserHeight);
     var speed = 5 + Math.random() * 40;

     // create our Snowflake object
     var snowflakeObject = new Snowflake(snowflakeClone,
       speed,
       initialXPos,
       initialYPos);
     snowflakes.push(snowflakeObject);
   }

   // remove the original snowflake because we no longer need it visible
   snowflakeContainer.removeChild(originalSnowflake);

   // call the moveSnowflakes function every 30 milliseconds
   moveSnowflakes();
 }

 //
 // Responsible for moving each snowflake by calling its update function
 //
 function moveSnowflakes() {
   for (var i = 0; i < snowflakes.length; i++) {
     var snowflake = snowflakes[i];
     snowflake.update();
   }

   // Reset the position of all the snowflakes to a new value
   if (resetPosition) {
     browserWidth = document.documentElement.clientWidth;
     browserHeight = document.documentElement.clientHeight;

     for (var i = 0; i < snowflakes.length; i++) {
       var snowflake = snowflakes[i];

       snowflake.xPos = getPosition(50, browserWidth);
       snowflake.yPos = getPosition(50, browserHeight);
     }

     resetPosition = false;
   }

   requestAnimationFrame(moveSnowflakes);
 }

 //
 // This function returns a number between (maximum - offset) and (maximum + offset)
 //
 function getPosition(offset, size) {
   return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
 }

 //
 // Trigger a reset of all the snowflakes' positions
 //
 function setResetFlag(e) {
   resetPosition = true;
 }