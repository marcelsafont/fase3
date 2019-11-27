$(document).ready(function(){

	$('#colaborador-btn').click(function(){
		$('#responsable').hide();
		$('#colaborador').show(100, function(){
			let pos = $('#colaborador .box-info').position();
			window.scrollTo(0, pos.top);
		});	
	})

	$(".block-cards .item").flip();

	$('#responsable-btn').click(function(){
		$('#colaborador').hide();
		$('#responsable').show(100, function(){
			let pos = $('#responsable .box-info').position();
			window.scrollTo(0, pos.top);
		});
	})	

	$('.box-checkbox').click(function(){
		$(this).toggleClass('checked');
	})
	$(".box-video").fitVids();

	$('.enviar-btn').click(function(){
		 let field = $(this).parent().find('input');
		if(field.val() == 'Las dos Fridas' 
		|| field.val() == 'LAS DOS FRIDAS' 
		|| field.val() == 'Las dos fridas'
		|| field.val() == 'las dos fridas'
		|| field.val() == 'Las Dos Fridas'){
			$('.message-wrong').removeClass('visible');
			$('.message-ok').addClass('visible');
		}else{
			$('.message-wrong').addClass('visible');
			$('.message-ok').removeClass('visible');
		}
	})
});
