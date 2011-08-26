var preLoadImg = new Object();

function CreateRollOvers(){
	$("img.rollover").each(function(){
		var imgSrc = this.src;
		var sep = imgSrc.lastIndexOf('.');
		var onSrc = imgSrc.substr(0, sep) + '_on' + imgSrc.substr(sep, 4);
		preLoadImg[imgSrc] = new Image();
		preLoadImg[imgSrc].src = onSrc;
		$(this).hover(
			function() { this.src = onSrc; },
			function() { this.src = imgSrc; }
		);
	});
}

$(function(){
	CreateRollOvers();
});
