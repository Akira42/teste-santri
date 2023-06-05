$( document ).ready(function() {
    
    $(window).scroll(function(){
        pageScroll();
    });

    function pageScroll(){
        if($(window).scrollTop()  > 100) {
            $('.faixa-topo').slideUp();
        } else {
          $('.faixa-topo').slideDown();
        }
        
    }

    pageScroll();

    $('.icon-cart').click(function(){
      $('#cart-preview').toggleClass('cart-hidden');
    });

    $('#close-cart').click(function(){
      $('#cart-preview').addClass('cart-hidden');
    });

    $('.back-to-store').click(function(){
      $('#cart-preview').addClass('cart-hidden');
    });

    $('#hamburger-menu').click(function(){
      $('.menu-mobile-wrapper').toggleClass('menu-mob-hidden');
    });

});

AOS.init();