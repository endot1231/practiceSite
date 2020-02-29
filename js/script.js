
//ナビボタン取得
const menubutton = document.querySelector('.hamburger');

menubutton.addEventListener('click', function () {
	//クラス名の追加または、削除
	menubutton.classList.toggle('is-active')
});

const wrapper = document.getElementById('wrapper');

const menebtn = document.getElementById('nav-btn');
menebtn.addEventListener('click', navToggle);

function navToggle() {

	if (wrapper.classList.contains('nav-open')) {
		navCloseFunc();
	}
	else {
		navOpenFunc();
	}
}

function navOpenFunc() {
	//wpapperのclass[nac-open]付与
	wrapper.classList.add('nav-open');
}

function navCloseFunc() {
	//wrapperのclass[nav-open]付与
	wrapper.classList.remove('nav-open');
}