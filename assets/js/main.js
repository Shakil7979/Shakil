$(document).ready(function(){
	 // Back to TOP 
        $('.scrollBtn').click(function(){
          $('html,body').animate({
            scrollTop:0
          },1000);

          return false;
        });

        // menu click scroll 

	  $('.nav-link').click(function(){

          $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top
          },1000);

          return false;
        });

       

	// ================ particle js
	$('.particle').particleground({
	    dotColor: '#FE7E11',
	    lineColor: '#000', 
	    moveSpeed:'6',
	  }); 

	// =============counter up==========
	 $('.counter-area p').counterUp({
			time:2000 

	})
	 // ==========progress bar===========
	$('.skill-prg1').LineProgressbar({
		  percentage: 90,
		  fillBackgroundColor: '#000',
		  backgroundColor: '#fff',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	$('.skill-prg2').LineProgressbar({
		  percentage: 85,
		  fillBackgroundColor: '#000',
		  backgroundColor: '#fff',
		  radius: '0px',
		  height: '5px',
		 width: '80%'
		});

	$('.skill-prg3').LineProgressbar({
		  percentage: 70,
		  fillBackgroundColor: '#000',
		  backgroundColor: '#fff',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	$('.skill-prg4').LineProgressbar({
		  percentage: 60,
		  fillBackgroundColor: '#000',
		  backgroundColor: '#fff',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	$('.skill-prg5').LineProgressbar({
		  percentage: 75,
		 fillBackgroundColor: '#000',
		  backgroundColor: '#fff',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	$('.skill-prg6').LineProgressbar({
		  percentage: 80,
		  fillBackgroundColor: '#000',
		  backgroundColor: '#fff',
		  radius: '0px',
		  height: '5px',
		 width: '80%'
		});
	$('.skill-prg7').LineProgressbar({
		  percentage: 80,
		  fillBackgroundColor: '#000',
		  backgroundColor: '#fff',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});
	$('.skill-prg8').LineProgressbar({
		  percentage: 80,
		 fillBackgroundColor: '#000',
		  backgroundColor: '#fff',
		  radius: '0px',
		  height: '5px',
		  width: '80%'
		});

	//========== owl carosel==========

	$(".testimonials").owlCarousel({
		  	items:1,
		  	loop:true,  
		  	autoplay:true,
		  	autoplayTimeout:3000, 
		  	center:true, 
		  });


	// =============mixitup
	var mixer = mixitup('.project');
	var mixer = mixitup(project, {
	    animation: {
        	nudge: false
    	}
	})
  
	$('.project-search').magnificPopup({
		  delegate: 'a',  
		});

});


      $(window).scroll(function(){

        var scrollValue = $(this).scrollTop();

        if(scrollValue>500){
          $('.scrollBtn i').fadeIn();
        }else{
           $('.scrollBtn i').fadeOut();
        }

        if(scrollValue>200){
          $('.header-area').addClass('FixedHeader');
        }else{
           $('.header-area').removeClass('FixedHeader');
        }
})