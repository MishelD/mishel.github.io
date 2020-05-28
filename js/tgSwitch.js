$('document').ready(function(){
	$('.tgSwitch').each(function(){
		if ($(this).find('input').attr('checked')) {
			$(this).addClass('active');
			$(this).find('.slider').css({"-webkit-transform" : "translateX(39px)"});
		}
	});
});

var checked = JSON.parse(localStorage.getItem('.themeStyle'));
if (checked == true) {
    document.getElementById(".themeStyle").checked = true;
} 

function save(){
    var checkbox = document.querySelector('input');
    localStorage.setItem('.themeStyle', checkbox.checked);
}

$('.check').click(
function() {
save();
}
)

let theme = document.querySelector('.theme');

$('.tgSwitch').click(function(){
	if ($(this).find('input').attr('checked')) {
		$(this).removeClass('active');
		$(this).find('input').attr('checked', false);
		$(this).find('.slider').css({"-webkit-transform" : "translateX(0px)"});
		theme.textContent = 'светлая тема';
		document.querySelector('.themeStyle').href="css/light.css";
	} else {
		$(this).addClass('active');
		$(this).find('input').attr('checked', true);
		$(this).find('.slider').css({"-webkit-transform" : "translateX(39px)"});
		theme.textContent = 'тёмная тема';
		document.querySelector('.themeStyle').href="css/dark.css";
	}
});