/*
* DMZKTIP - Tooltip fácil com vários estilos.
* @author Danilo "DMZK" Metzker
*
*/

$( document ).ready(function(){
	$(".dmzk_show_tip").hover(function(){
    	dmzktip = $(this).find('.dmzktip');
    	dmzktip.fadeIn(0); //Fade com delay = bug
    
	}, function(){
    	dmzktip.fadeOut(0); //Fade com delay = bug
    
	}).mousemove(function(event){
    	var posX = event.pageX+20;
    	var posY = event.pageY+20;
    	var width = dmzktip.width();
    	var height = dmzktip.height();
    
    	dmzktip.css({top: posY});
    	dmzktip.css({left: posX});
	});
});
