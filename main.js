const menuEmail=document.querySelector('.navbar-email')
const submenuEmail=document.querySelector('.menu-email')
const menuMobile=document.querySelector('.mobile-menu')
const menuHamIcon=document.querySelector('.menu-icon')
const menuCarritoCompras=document.querySelector('.navbar-shopping-cart')
const aside=document.querySelector('.product-detail')

menuEmail.addEventListener('click',intercambioMenuEmail)
menuHamIcon.addEventListener('click',intercambioMenuMobile)
menuCarritoCompras.addEventListener('click',intercambioMenuCarrito)


function intercambioMenuEmail(){    
    // se valida si el contenedor del carrito de compras contiene la clase inactive.  
    const isAsideClosed=aside.classList.contains('inactive')   
    // si el contenedor del carrito de compras no contiene la clase inactive, se le agrega. La misma lógica se aplica para las demás opciones    
    if(!isAsideClosed){  
        aside.classList.add('inactive')
    }
    submenuEmail.classList.toggle('inactive')     
}

function intercambioMenuMobile(){
    const isAsideClosed=aside.classList.contains('inactive')   
    if(!isAsideClosed){  
        aside.classList.add('inactive')
    }
        menuMobile.classList.toggle('inactive')     
}  

function intercambioMenuCarrito(){   
    const isMenuMobileClosed=menuMobile.classList.contains('inactive') 
    const issubmenuEmailClosed=menuEmail.classList.contains('inactive') 

    if(!isMenuMobileClosed || !issubmenuEmailClosed){  
        menuMobile.classList.add('inactive')
        submenuEmail.classList.add('inactive')
    }
        aside.classList.toggle('inactive')     
}