const menuEmail=document.querySelector('.navbar-email')
const submenuEmail=document.querySelector('.menu-email')
const menuMobile=document.querySelector('.mobile-menu')
const menuHamIcon=document.querySelector('.menu-icon')
const menuCarritoCompras=document.querySelector('.navbar-shopping-cart')
const aside=document.querySelector('.product-detail')
const cardsContainer=document.querySelector('.cards-container')

// array para almacenar los prductos
const productList=[]

// se agregan los productos como objetos
productList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'motorcycle',
    price:2000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'motorcycle',
    price:2000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


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

function mostrarListaProductos(arr){
    for (product of arr){
        const productCard=document.createElement('div')
        const productInfo=document.createElement('div')
        const productImg=document.createElement('img')   
        const productInfoDiv=document.createElement('div')
        const productPrice=document.createElement('p')
        const productName=document.createElement('p')
        const productInfoFigure=document.createElement('figure')
        const productImgCart=document.createElement('img')
     
        productCard.classList.add('product-card')
        productInfo.classList.add('product-info')
        productImg.setAttribute('src',product.image)
        productPrice.innerText='$'+product.price
        productName.innerText=product.name
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
     
        productInfoFigure.appendChild(productImgCart)
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)
     }
}

mostrarListaProductos(productList)



