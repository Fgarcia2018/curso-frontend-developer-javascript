const menuEmail=document.querySelector('.navbar-email')
const submenuEmail=document.querySelector('.menu-email')
const menuMobile=document.querySelector('.mobile-menu')
const menuHamIcon=document.querySelector('.menu-icon')
const menuCarritoCompras=document.querySelector('.navbar-shopping-cart')
const aside=document.querySelector('.product-detail-car')
const cardsContainer=document.querySelector('.cards-container')
const containerProductDetail=document.querySelector('.product-detail')
const btnCerrarDetalle=document.querySelector('.product-detail-close')
const conCantProductCar=document.querySelector('#cont-cant-productos')
const btnAddToCar=document.querySelector('.add-to-cart-button')

let cantidadProductosSeleccionados=0

// array para almacenar los prductos
const productList=[]

// se agregan los productos como objetos
productList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',   
    description:'Bicicleta para todo terreno GW'
})
productList.push({
    name:'car',
    price:2000,
    // image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    image:'carro.jpg',
    description:'Vehículo Hibrido, 12 horas de autonomía'
})

productList.push({
    name:'motorcycle',
    price:1500,
    image:'https://www.motosusadas.com.co/697-large_default/kawasaki-ninja300.jpg',
    description:'Motocicleta 300 CC'
})
productList.push({
    name:'skate',
    price:80,
    image:'https://i.linio.com/p/6d416d0a7ac990bab2be95555e1a1660-product.webp',  
    description:'Patineta profesional'
})


menuEmail.addEventListener('click',intercambioMenuEmail)
menuHamIcon.addEventListener('click',intercambioMenuMobile)
menuCarritoCompras.addEventListener('click',intercambioMenuCarrito)
btnAddToCar.addEventListener('click',contarProductosSeleccionados)
   

function intercambioMenuEmail(){    
    // se valida si el contenedor del carrito de compras contiene la clase inactive.  
    const isAsideClosed=aside.classList.contains('inactive') 
    const isProductDetail=containerProductDetail.classList.contains('inactive')   
    // si el contenedor del carrito de compras no contiene la clase inactive, se le agrega. La misma lógica se aplica para las demás opciones    
    if(!isAsideClosed || !isProductDetail){  
        aside.classList.add('inactive')
        containerProductDetail.classList.add('inactive')
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
    const isProductDetail=containerProductDetail.classList.contains('inactive') 

    if(!isMenuMobileClosed || !issubmenuEmailClosed || !isProductDetail){  
        menuMobile.classList.add('inactive')
        submenuEmail.classList.add('inactive')
        containerProductDetail.classList.add('inactive')
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

        productImg.addEventListener('click',mostrarDetalleProducto)
        productImg.addEventListener('click',()=>{detallarProducto(productName.innerText,productPrice.innerText,productImg.src)})
        btnCerrarDetalle.addEventListener('click',ocultarDetalleProducto)  
        productImgCart.addEventListener('click',contarProductosSeleccionados)
        productImgCart.addEventListener('click',()=>{
                                                        productImgCart.setAttribute('src','./icons/bt_added_to_cart.svg')
                                                      
                                                    })

     }  
}

function mostrarDetalleProducto(){
    const asideClosed=menuMobile.classList.contains('inactive') 
    const issubmenuEmailClosed=menuEmail.classList.contains('inactive')    

    if(!asideClosed || !issubmenuEmailClosed ){  
        aside.classList.add('inactive')
        submenuEmail.classList.add('inactive')       
    }
    containerProductDetail.classList.remove('inactive')   
}

function ocultarDetalleProducto(){
    containerProductDetail.classList.add('inactive') 
}


function detallarProducto(name,price,image){
    
    const productDetailImage=document.getElementById('product-image')  
    const productInfoName=document.getElementById('product-name')
    const productInfoPrice=document.getElementById('product-price')
    const productInfoDesc=document.getElementById('product-desc')
  
    productDetailImage.setAttribute('src',image)    
    productInfoName.innerText=name
    productInfoPrice.innerText=price

    productList.forEach((product)=>{
        if(product.name===productInfoName.innerText){
            productInfoDesc.innerText=product.description 
        }
    })      
}

function contarProductosSeleccionados(){   
    cantidadProductosSeleccionados++
    conCantProductCar.innerText=cantidadProductosSeleccionados
}
function deshabilitarButton(name){
    const btnProducAdded=document.querySelector('.product-info img')
    // btnProducAdded.setAttribute('src','./icons/bt_added_to_cart.svg')  
    productList.forEach((product)=>{
        if(product.name===name){
            btnProducAdded.setAttribute('src','./icons/bt_added_to_cart.svg')
        }
    })      

}


mostrarListaProductos(productList)


