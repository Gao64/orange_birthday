
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000小橙同学", 
				"小橙^200宝贝，<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小橙宝贝又长大一岁啦 ！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^400希望你长大，也希望你可以永远都不用长大！&nbsp;^300想每天给你说早安晚安，&nbsp;也想每天都能见到你的微笑，&nbsp;想陪你走遍天涯海角，&nbsp;^400也想陪你去寻找所有的开开心心，&nbsp;历经生命中所有的点点滴滴 ！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^300我知道你有在很努力的生活，&nbsp;每天很累很辛苦，&nbsp;但依然要开心鸭！&nbsp;^400所以我希望你所有的努力都能在未来开出美丽的花朵，&nbsp;并满载着一生的幸福快乐 ！<br><p style='float:right; display:block; width:80px;'>^1000小高^200同学</p>"],
			typeSpeed: 150,
			backSpeed: 100
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
