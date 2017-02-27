(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



 $(document).ready(function(){
              $('.carousel.carousel-slider').carousel({fullWidth: true});
              //vara de navegacion
              $(".button-collapse").sideNav();
              //carusel para las fotos
              $('.carousel').carousel();
              $('.slider').slider({
                height:800
              });
   });

 
   $(document).ready(function(){
     var altura = $('.menu').offset().top;
    
     $(window).on('scroll', function(){
       if( $(window).scrollTop() > altura){
            $(".menu").addClass("menu-fixed");
       } else {
            $(".menu").removeClass("menu-fixed");
       }
     });
              
   });