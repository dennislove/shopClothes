jQuery(document).ready(function() {
    "use strict";

/*===================================================================================*/
/*	OWL CAROUSEL
/*===================================================================================*/
jQuery(function () {
    var dragging = true;
    var owlElementID = "#owl-main";

    function fadeInReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            jQuery(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").css({ opacity: 0 });
        }
    }

    function fadeInDownReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            jQuery(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
        }
    }

    function fadeInUpReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
        }
    }

    function fadeInLeftReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            jQuery(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
        }
    }

    function fadeInRightReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            jQuery(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
        }
    }

    function fadeIn() {
        jQuery(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
    }

    function fadeInDown() {
        jQuery(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
    }

    function fadeInUp() {
        jQuery(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
    }

    function fadeInLeft() {
        jQuery(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
    }

    function fadeInRight() {
        jQuery(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
    }

    jQuery(owlElementID).owlCarousel({

        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        singleItem: true,
        addClassActive: true,
        transitionStyle: "fade",
        navigationText: ["<i class='icon fa fa-angle-left'></i>", "<i class='icon fa fa-angle-right'></i>"],

        afterInit: function() {
            fadeIn();
            fadeInDown();
            fadeInUp();
            fadeInLeft();
            fadeInRight();
        },

        afterMove: function() {
            fadeIn();
            fadeInDown();
            fadeInUp();
            fadeInLeft();
            fadeInRight();
        },

        afterUpdate: function() {
            fadeIn();
            fadeInDown();
            fadeInUp();
            fadeInLeft();
            fadeInRight();
        },

        startDragging: function() {
            dragging = true;
        },

        afterAction: function() {
            fadeInReset();
            fadeInDownReset();
            fadeInUpReset();
            fadeInLeftReset();
            fadeInRightReset();
            dragging = false;
        }

    });

if (jQuery(owlElementID).hasClass("owl-one-item")) {
    jQuery(owlElementID + ".owl-one-item").data('owlCarousel').destroy();
}

jQuery(owlElementID + ".owl-one-item").owlCarousel({
    singleItem: true,
    navigation: false,
    pagination: false
});




jQuery('.home-owl-carousel').each(function(){

    var owl = $(this);
    var  itemPerLine = owl.data('item');
    if(!itemPerLine){
        itemPerLine = 4;
    }
    owl.owlCarousel({
        items : itemPerLine,
        itemsTablet:[768,2],
        navigation : true,
        pagination : false,

        navigationText: ["", ""]
    });
});

jQuery('.homepage-owl-carousel').each(function(){

    var owl = $(this);
    var  itemPerLine = owl.data('item');
    if(!itemPerLine){
        itemPerLine = 4;
    }
    owl.owlCarousel({
        items : itemPerLine,
        itemsTablet:[768,2],
        itemsDesktop : [1199,2],
        navigation : true,
        pagination : false,

        navigationText: ["", ""]
    });
});

jQuery(".blog-slider").owlCarousel({
    items : 2,
    itemsDesktopSmall :[979,2],
    itemsDesktop : [1199,2],
    navigation : true,
    slideSpeed : 300,
    pagination: false,
    navigationText: ["", ""]
});

jQuery(".best-seller").owlCarousel({
    items : 3,
    navigation : true,
    itemsDesktopSmall :[979,2],
    itemsDesktop : [1199,2],
    slideSpeed : 300,
    pagination: false,
    paginationSpeed : 400,
    navigationText: ["", ""]
});

jQuery(".sidebar-carousel").owlCarousel({
    items : 1,
    itemsTablet:[768,2],
    itemsDesktopSmall :[979,2],
    itemsDesktop : [1199,1],
    navigation : true,
    slideSpeed : 300,
    pagination: false,
    paginationSpeed : 400,
    navigationText: ["", ""]
});

jQuery(".brand-slider").owlCarousel({
    items : 6,
    navigation : true,
    slideSpeed : 300,
    pagination: false,
    paginationSpeed : 400,
    navigationText: ["", ""]
});    
jQuery("#advertisement").owlCarousel({
    items : 1,
    itemsDesktopSmall :[979,2],
    itemsDesktop : [1199,1],
    navigation : true,
    slideSpeed : 300,
    pagination: true,
    paginationSpeed : 400,
    navigationText: ["", ""]
});    



});

/*===================================================================================*/
/*  LAZY LOAD IMAGES USING ECHO
/*===================================================================================*/
jQuery(function(){
    echo.init({
        offset: 100,
        throttle: 250,
        unload: false
    });
});

/*===================================================================================*/
/*  RATING
/*===================================================================================*/

jQuery(function(){
    jQuery('.rating').rateit({max: 5, step: 1, value : 4, resetable : false , readonly : true});
});

/*===================================================================================*/
/* PRICE SLIDER
/*===================================================================================*/
jQuery(function () {

// Price Slider
if (jQuery('.price-slider').length > 0) {
    jQuery('.price-slider').slider({
        min: 100,
        max: 700,
        step: 10,
        value: [200, 500],
        handle: "square"

    });

}

});


/*===================================================================================*/
/* SINGLE PRODUCT GALLERY
/*===================================================================================*/
jQuery(function(){
    jQuery('#owl-single-product').owlCarousel({
        items:1,
        itemsTablet:[768,2],
        itemsDesktop : [1199,1]

    });

    jQuery('#owl-single-product-thumbnails').owlCarousel({
        items: 4,
        pagination: true,
        rewindNav: true,
        itemsTablet : [768, 4],
        itemsDesktop : [1199,3]
    });

    jQuery('#owl-single-product2-thumbnails').owlCarousel({
        items: 6,
        pagination: true,
        rewindNav: true,
        itemsTablet : [768, 4],
        itemsDesktop : [1199,3]
    });

    jQuery('.single-product-slider').owlCarousel({
        stopOnHover: true,
        rewindNav: true,
        singleItem: true,
        pagination: true
    });

  
});





/*===================================================================================*/
/*  WOW 
/*===================================================================================*/

jQuery(function () {
    new WOW().init();
});


/*===================================================================================*/
/*  TOOLTIP 
/*===================================================================================*/
jQuery("[data-toggle='tooltip']").tooltip(); 




})


// upload file
(function ($) {
    $(document).ready(function () {
      
      generateID()
      choose()
      generateOption()
      selectionOption()
      removeClass()
      uploadImage()
      submit()
      resetButton()
      removeNotification()
      autoRemoveNotification()
      autoDequeue()
      
      var ID
      var way = 0
      var queue = []
      var fullStock = 10
      var speedCloseNoti = 1000
      
      function generateID() {
        var text = $('#header-wrapper span')
        var newID = ''
      
        for(var i = 0; i < 3; i++) {
          newID += Math.floor(Math.random() * 3)
        }
        
        ID = 'ID: 5988' + newID
        text.html(ID)
      }
      
      function choose() {
        var li = $('.ways li')
        var section = $('.sections-active section')
        var index = 0
        li.on('click', function () {
          index = $(this).index()
          $(this).addClass('active-wrapper')
          $(this).siblings().removeClass('active-wrapper')
          
          section.siblings().removeClass('active-wrapper')
          section.eq(index).addClass('active-wrapper')
          if(!way) {
            way = 1
          }  else {
            way = 0
          }
        })
      }
      
      function generateOption() {
        var select = $('select option')
        var selectAdd = $('.select-option .option')
        $.each(select, function (i, val) {
            $('.select-option .option').append('<div rel="'+ $(val).val() +'">'+ $(val).html() +'</div>')
        })
      }
      
      function selectionOption() {
        var select = $('.select-option .head')
        var option = $('.select-option .option div')
      
        select.on('click', function (event) {
          event.stopPropagation()
          $('.select-option').addClass('active-wrapper')
        })
        
        option.on('click', function () {
          var value = $(this).attr('rel')
          $('.select-option').removeClass('active-wrapper')  
          select.html(value)
      
          $('select#category').val(value)
        })
      }
      
      function removeClass() {
        $('body').on('click', function () { 
          $('.select-option').removeClass('active-wrapper')   
        })                  
      }
      
      function uploadImage() {
        var button = $('.images-upload .pic')
        var uploader = $('<input type="file" accept="image/*" />')
        var images = $('.images-upload')
        
        button.on('click', function () {
          uploader.click()
        })
        
        uploader.on('change', function () {
            var reader = new FileReader()
            reader.onload = function(event) {
              images.prepend('<div class="img" style="background-image: url(\'' + event.target.result + '\');" rel="'+ event.target.result  +'"><span>remove</span></div>')
            }
            reader.readAsDataURL(uploader[0].files[0])
    
         })
        
        images.on('click', '.img', function () {
          $(this).remove()
        })
      
      }
      
      function submit() {  
        var button = $('#send')
        
        button.on('click', function () {
          if(!way) {
            var title = $('#title')
            var cate  = $('#category')
            var images = $('.images-upload .img')
            var imageArr = []
  
            
            for(var i = 0; i < images.length; i++) {
              imageArr.push({url: $(images[i]).attr('rel')})
            }
            
            var newStock = {
              title: title.val(),
              category: cate.val(),
              images: imageArr,
              type: 1
            }
            
            saveToQueue(newStock)
          } else {
            // discussion
            var topic = $('#topic')
            var message = $('#msg')
            
            var newStock = {
              title: topic.val(),
              message: message.val(),
              type: 2
            }
            
            saveToQueue(newStock)
          }
        })
      }
      
      function removeNotification() {
        var close = $('.notification')
        close.on('click', 'span', function () {
          var parent = $(this).parent()
          parent.fadeOut(300)
          setTimeout(function() {
            parent.remove()
          }, 300)
        })
      }
      
      function autoRemoveNotification() {
        setInterval(function() {
          var notification = $('.notification')
          var notiPage = $(notification).children('.btn')
          var noti = $(notiPage[0])
          
          setTimeout(function () {
            setTimeout(function () {
             noti.remove()
            }, speedCloseNoti)
            noti.fadeOut(speedCloseNoti)
          }, speedCloseNoti)
        }, speedCloseNoti)
      }
      
      function autoDequeue() {
        var notification = $('.notification')
        var text
        
        setInterval(function () {
  
            if(queue.length > 0) {
              if(queue[0].type == 2) {
                text = ' Your discusstion is sent'
              } else {
                text = ' Your order is allowed.'
              }
              
              notification.append('<div class="success btn"><p><strong>Success:</strong>'+ text +'</p><span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></div>')
              queue.splice(0, 1)
              
            }  
        }, 10000)
      }
      
      function resetButton() {
        var resetbtn = $('#reset')
        resetbtn.on('click', function () {
          reset()
        })
      }
      
      // helpers
      function saveToQueue(stock) {
        var notification = $('.notification')
        var check = 0
        
        if(queue.length <= fullStock) {
          if(stock.type == 2) {
              if(!stock.title || !stock.message) {
                check = 1
              }
          } else {
            if(!stock.title || !stock.category || stock.images == 0) {
              check = 1
            }
          }
          
          if(check) {
            notification.append('<div class="error btn"><p><strong>Error:</strong> Please fill in the form.</p><span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></div>')
          } else {
            notification.append('<div class="success btn"><p><strong>Success:</strong> '+ ID +' is submitted.</p><span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></div>')
            queue.push(stock)
            reset()
          }
        } else {
          notification.append('<div class="error btn"><p><strong>Error:</strong> Please waiting a queue.</p><span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></div>')
        } 
      }
      function reset() {
        
        $('#title').val('')
        $('.select-option .head').html('Category')
        $('select#category').val('')
        
        var images = $('.images-upload .img')
        for(var i = 0; i < images.length; i++) {
          $(images)[i].remove()
        }
        
        var topic = $('#topic').val('')
        var message = $('#msg').val('')
      }
    })
  })(jQuery)