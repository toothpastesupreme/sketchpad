$(document).ready(function() {

	//make container and table box, and xy-1 tablerows with xy-1 tabledatas each containing a div
	
	function tab(xy) {
		$('.container').append("<div class='tablebox'></div>");
		$('.tablebox').append('<table border="0px"></table>');
		
		//loopin
		for(var i =1; i<xy; i++) {
			$('table').append('<tr></tr>');
		};

		for(var e =1; e<xy; e++) {
			$('tr').append('<td><div class="data"></div></td>');
		};
		
		//data size changes pixel size
		$('.data').height("15px");
		$('.data').width("15px");
		
		//set tablebox to same size as table
		var boxX = $('table').width();
		var boxY = $('table').height();
		$('.tablebox').width(boxX)
		$('.tablebox').height(boxY);
		$('.tablebox').css("border","1px solid black");	

		//change td to random color, or darken data div if already colored	
		$('td').hover(function() {
			if($(this).hasClass('color')) {
				$(this).addClass('one');
			}else{
				var r = Math.floor(Math.random() * 256);
				var g = Math.floor(Math.random() * 256);
				var b = Math.floor(Math.random() * 256);
				var hue = 'rgb('+r+','+g+','+b+')';		
				$(this).css('background-color',hue);
				$(this).addClass('color');
			};
		},function() {
			$(this).css('background-color',hue);
		});
	};
	
	tab(17);		
		
	//add clear and resize button
	$('.container').prepend('<div class="clear">Clear and Resize</div>');
	
	//clear color then prompt user for resize then remove box and recreate
	$('.clear').click(function() {
		var resize = prompt("Choose a new value for Height and Width");
		$('.tablebox').remove();
		tab(resize*1+1);
	});		
});