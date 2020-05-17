$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })

    
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        prevArrow:'<img src="img/arrow_left.png" width="13px" height="27px" style="margin:auto 33px"  slick-prev "></img>',
        nextArrow:'<img src="img/arrow_right.png" width="13px" height="27px" style="margin:auto 33px" slick-next "></img>',
        responsive: [
          {
            breakpoint: 866,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
    
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }        
      
    ]        
      });

      $('.bottom__main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        prevArrow:'<img src="img/arrow_left.png" width="13px" height="27px" style="margin:auto 33px"  slick-prev "></img>',
        nextArrow:'<img src="img/arrow_right.png" width="13px" height="27px" style="margin:auto 33px" slick-next "></img>',
        
  })
    
})

$(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    var accordion = new Accordion($('.accordion-menu'), false);

    
  })



 


