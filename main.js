const menuEmail=document.querySelector('.navbar-email')
const submenuEmail=document.querySelector('.menu-email')
menuEmail.addEventListener('click',intercambioMenuEmail)


function intercambioMenuEmail(){
    submenuEmail.classList.toggle('menu-email')       
}