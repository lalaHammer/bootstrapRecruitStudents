$(function(){
	$('.nav').on('click','a',function(){
		var hr=$(this).attr('href');
		var index=$(this).index();
		var htop=$(hr).offset().top;
		$('html body').stop().animate({scrollTop:htop},1000);
	});
//	setTimeout(function(){
			$('#head').find('.col-md-10').addClass('animated bounceInUp')
		
//	},500);
	$(window).scroll(function(){
		var sc=$(window).scrollTop();
		console.log(sc);
		if(sc>200){
			$('#forum').find('.col-md-4').addClass('animated bounceInUp');
		}
		if(sc>600){
			$('#web').find('.col-md-6').eq(0).addClass('animated bounceInLeft');
			$('#web').find('.col-md-6').eq(1).addClass('animated bounceInRight');
		}
		if(sc>1000){
			$('#boot').addClass('animated bounceInUp');
		}
		if(sc>1500){
			$('#new').find('.col-md-3').addClass('animated fadeIn');
		}
		if(sc>2100){
			$('#app').addClass('animated bounceInUp');
		}
		if(sc>2600){
			$('#contact').find('.col-md-6').eq(0).addClass('animated bounceInLeft');
			$('#contact').find('.col-md-6').eq(1).addClass('animated bounceInRight');
		}
		
	});
});
