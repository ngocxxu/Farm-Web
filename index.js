// Scroll and header follow.

function changeCSSHeader() {
	var navElementCSS = document.querySelector('header');
	if (this.scrollY > 100) {
		navElementCSS.style.cssText =
			'background-color:white ; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; ';
	} else {
		navElementCSS.style.cssText = 'transparent ; box-shadow:none; ';
	}
}
window.addEventListener('scroll', changeCSSHeader, false);
// Scroll and header follow.

// Dark mode and toggle
function myFunction() {
	document.body.classList.toggle('dark-mode');

	var changeFarm = document.getElementById('changeFarm'); //thay đổi chữ Farm thì chuyển mode
	changeFarm.classList.toggle('changeColorFarm');

	var changeShadow = document.getElementsByClassName('changeShadow'); //tạo shadow cho grow_item
	var u;
	for (u = 0; u < changeShadow.length; u++) {
		changeShadow[u].classList.toggle('changeShadowCSS');
	}

	var changeToWhite = document.getElementsByClassName('whiteText'); //thay đổi các chữ thành màu trắng
	var i;
	for (i = 0; i < changeToWhite.length; i++) {
		changeToWhite[i].classList.toggle('dark-mode-about');
	}

	var changeToBg = document.getElementsByClassName('bgDark'); //thay đổi 1 số BG thành màu tối
	var j;
	for (j = 0; j < changeToBg.length; j++) {
		changeToBg[j].classList.toggle('dark-mode-bg');
	}
}

function myChange(x) {
	x.classList.toggle('fa-sun');
}
// Dark mode and trigger

// Drop down navbar
function myDropdown() {
	document.getElementById('dropDown').classList.toggle('show');
}
// Drop down navbar

$('.carousel').carousel('cycle');

$(document).ready(function () {
	$('.owl-carousel').owlCarousel();
});
$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
	},
});

// Create Modal

//img1
var img = document.getElementById('myImg');
var modal = document.getElementById('myModal');
var imgModal = document.getElementById('img01');
var captionModal = document.getElementById('caption');

img.onclick = function () {
	modal.style.display = 'block';
	imgModal.src = this.src;
	captionModal.innerHTML = this.alt;
};

var closeModal = document.getElementById('close');
closeModal.onclick = function () {
	modal.style.display = 'none';
};

// Img2
var img2 = document.getElementById('myImg2');
var modal2 = document.getElementById('myModal2');
var imgModal2 = document.getElementById('img02');
var captionModal2 = document.getElementById('caption2');

img2.onclick = function () {
	modal2.style.display = 'block';
	imgModal2.src = this.src;
	captionModal2.innerHTML = this.alt;
};

var closeModal2 = document.getElementById('close2');
closeModal2.onclick = function () {
	modal2.style.display = 'none';
};

// Img3
var img3 = document.getElementById('myImg3');
var modal3 = document.getElementById('myModal3');
var imgModal3 = document.getElementById('img03');
var captionModal3 = document.getElementById('caption3');

img3.onclick = function () {
	modal3.style.display = 'block';
	imgModal3.src = this.src;
	captionModal3.innerHTML = this.alt;
};

var closeModal3 = document.getElementById('close3');
closeModal3.onclick = function () {
	modal3.style.display = 'none';
};

// Img4
var img4 = document.getElementById('myImg4');
var modal4 = document.getElementById('myModal4');
var imgModal4 = document.getElementById('img04');
var captionModal4 = document.getElementById('caption4');

img4.onclick = function () {
	modal4.style.display = 'block';
	imgModal4.src = this.src;
	captionModal4.innerHTML = this.alt;
};

var closeModal4 = document.getElementById('close4');
closeModal4.onclick = function () {
	modal4.style.display = 'none';
};

// Img5
var img5 = document.getElementById('myImg5');
var modal5 = document.getElementById('myModal5');
var imgModal5 = document.getElementById('img05');
var captionModal5 = document.getElementById('caption5');

img5.onclick = function () {
	modal5.style.display = 'block';
	imgModal5.src = this.src;
	captionModal5.innerHTML = this.alt;
};

var closeModal5 = document.getElementById('close5');
closeModal5.onclick = function () {
	modal5.style.display = 'none';
};

// Img6
var img6 = document.getElementById('myImg6');
var modal6 = document.getElementById('myModal6');
var imgModal6 = document.getElementById('img06');
var captionModal6 = document.getElementById('caption6');

img6.onclick = function () {
	modal6.style.display = 'block';
	imgModal6.src = this.src;
	captionModal6.innerHTML = this.alt;
};

var closeModal6 = document.getElementById('close6');
closeModal6.onclick = function () {
	modal6.style.display = 'none';
};

// Img7
var img7 = document.getElementById('myImg7');
var modal7 = document.getElementById('myModal7');
var imgModal7 = document.getElementById('img07');
var captionModal7 = document.getElementById('caption7');

img7.onclick = function () {
	modal7.style.display = 'block';
	imgModal7.src = this.src;
	captionModal7.innerHTML = this.alt;
};

var closeModal7 = document.getElementById('close7');
closeModal7.onclick = function () {
	modal7.style.display = 'none';
};

// Create Modal
