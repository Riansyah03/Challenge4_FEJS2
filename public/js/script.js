$('.owl-carousel').owlCarousel({
  stagePadding: 400,
  loop:true,
  margin:36,
  nav:true,
  navText: ["<img src='./assets/icon/left_button.png'>","<img src='./assets/icon/right_button2.png'>"],
  dots: false,
  center:true,
  responsiveClass:true,
  autoWidth:true,
  autoHeight:true,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:2
    }
  }
})