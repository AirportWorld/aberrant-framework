function classToggle() {
    var menuToggle = document.getElementById('menu-toggle');
    menuToggle.classList.toggle('hide');
    menuToggle.classList.toggle('show');
    var menuUl = document.getElementById('menu-ul');
    menuUl.classList.toggle('hide');
    menuUl.classList.toggle('show');
}
window.onload=function(){
    var el = document.getElementById('menu-toggle');
    if(el){
        el.addEventListener('click', classToggle);
    }
}
