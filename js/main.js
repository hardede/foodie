// let offset = 0
// const screen = document.querySelector('.app-screenshots__item')

// document.querySelector('.btn-next').addEventListener('click', function() {
//   offset = offset + 395
//   if (offset > 1195) {
//     offset = 0
//   }
//   screen.style.left = -offset + 'px'
// })

// document.querySelector('.btn-prev').addEventListener('click', function() {
//   offset = offset - 395
//   if (offset < 0) {
//     offset = 1195
//   }
//   screen.style.left = -offset + 'px'
// })

// const alldots = document.querySelector('.reviews-dots')

// alldots.addEventListener('click', (event) =>{
//   event.target.classList.toggle('dots-active')
// }) 

$(function() {

  // $('.dots').on('click', function(e) {
  //   e.preventDefault()
    
  //   $($(this).siblings()).removeClass('dots-active');
  //   $($(this).closest('.reviews-dots').siblings().find('div')).removeClass('clients-active');

  //   $(this).addClass('dots-active')
  //   $($(this).attr('href')).addClass('clients-active')

  //   $('.product-slider').slick('setPosition')
  // })
   $(function() {
     let header = $('.header')

     $(window).scroll(function() {
       if($(this).scrollTop() > 750) {
        header.addClass('header_fixed')
       } else {
         header.removeClass('header_fixed')
       }
     })
   })


  $('.app-screenshots__item').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: 
    '<button class="screenshots-btn btn-prev"><img class="arrow" src="images/svg/left-arrow.svg" alt="arrow to swipe"></button>',
    nextArrow: 
    '<button class="screenshots-btn btn-next"><img class="arrow" src="images/svg/right-arrow.svg" alt="arrow to swipe"></button>',
    responsive: [
        {
            breakpoint: 1301,
            settings: {
                slidesToShow: 3,
                arrow: false,
                dots: true,
            }
        },
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        },
    ]
  })
  
  $('.items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrow: false,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrow: false,
                dots: true,
            }
        },
        {
            breakpoint: 870,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        
    ]
  })

  // $('.menu__btn').on('click', function() {
  //   $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
  // });

  $('.menu__btn').on('click', function(e) {
    e.stopPropagation();
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
  });

  $('.menu-mobile__list').on('click', function(e) {
    e.stopPropagation();
  });

  $('body, html, .menu-mobile__list').on('click', function(e) {
    $('.menu-mobile__list').removeClass('menu-mobile__list--active');
  });
})