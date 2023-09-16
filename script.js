const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu')

menuBtn.onclick = () =>{
    menu.classList.toggle('menu-close')
    document.querySelector('h1').classList.toggle('none')
    document.querySelector('.down-arrow').classList.toggle('none')
}


