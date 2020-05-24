$('document').ready(function(){
	$('.tgSwitch').each(function(){
		if ($(this).find('input').attr('checked')) {
			$(this).addClass('active');
			$(this).find('.slider').css({"-webkit-transform" : "translateX(39px)"});
		}
	});
});

let theme = document.querySelector('.theme');

$('.tgSwitch').click(function(){
	if ($(this).find('input').attr('checked')) {
		$(this).removeClass('active');
		$(this).find('input').attr('checked', false);
		$(this).find('.slider').css({"-webkit-transform" : "translateX(0px)"});
		theme.textContent = 'светлая тема';
		document.querySelector('.themeStyle').href="<css/light.css>";
	} else {
		$(this).addClass('active');
		$(this).find('input').attr('checked', true);
		$(this).find('.slider').css({"-webkit-transform" : "translateX(39px)"});
		theme.textContent = 'тёмная тема';
		document.querySelector('.themeStyle').href="<css/dark.css>";
	}
});