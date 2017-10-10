function classToggle() {
	const menuToggle = document.getElementById('menu-toggle');
	menuToggle.classList.toggle('hide');
	menuToggle.classList.toggle('show');
	const menuUl = document.getElementById('menu-ul');
	menuUl.classList.toggle('hide');
	menuUl.classList.toggle('show');
}

window.onload = function () {
	const el = document.getElementById('menu-toggle');
	if (el) {
		el.addEventListener('click', classToggle);
	}
};
