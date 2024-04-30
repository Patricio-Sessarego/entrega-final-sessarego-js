//imgPrincipal => YA ESTA DECLARADA EN 'light-mode-compra-producto.js'
//imgSecundariaUno => YA ESTA DECLARADA EN 'light-mode-compra-producto.js'
//imgSecundariaDos => YA ESTA DECLARADA EN 'light-mode-compra-producto.js'
//imgSecundariaTres => YA ESTA DECLARADA EN 'light-mode-compra-producto.js'
//imgSecundariaCuatro => YA ESTA DECLARADA EN 'light-mode-compra-producto.js'


//EVENTO MOUSEOVER/MOUSEOUT
let imgSrc //VARIABLE PARA GUARDAR EL SRC DE 'imgPrincipal'
let clickEvent //VARIABLE BOOL PARA SABER SI HUBO UN EVENTO CLICK ANTES DEL MOUSEOUT

imgSecundariaUno.addEventListener("mouseover" , () => {
    clickEvent = false //INICIALIZAMOS EN FALSE
    imgSrc = imgPrincipal.src //GUARDAMOS EL SRC ANTERIOR DE 'imgPrincipal'
    imgPrincipal.src = "../img/cloud-alpha-1.png" //CAMBIAMOS EL 'src' DE LA IMAGEN PRINCIPAL
})

imgSecundariaUno.addEventListener("mouseout" , () => {
    if(clickEvent === false){ //SI NO HAY EVENTE CLICK ENTRE MOUSEOVER Y MOUSEOUT
        imgPrincipal.src = imgSrc //VUELVE EL SRC A SU VALOR ANTERIOR
    }
})

imgSecundariaDos.addEventListener("mouseover" , () => {
    clickEvent = false //INICIALIZAMOS EN FALSE
    imgSrc = imgPrincipal.src //GUARDAMOS EL SRC ANTERIOR DE 'imgPrincipal'
    imgPrincipal.src = "../img/cloud-alpha-2.png" //CAMBIAMOS EL 'src' DE LA IMAGEN PRINCIPAL
})

imgSecundariaDos.addEventListener("mouseout" , () => {
    if(clickEvent === false){ //SI NO HAY EVENTE CLICK ENTRE MOUSEOVER Y MOUSEOUT
        imgPrincipal.src = imgSrc //VUELVE EL SRC A SU VALOR ANTERIOR
    }
})

imgSecundariaTres.addEventListener("mouseover" , () => {
    clickEvent = false //INICIALIZAMOS EN FALSE
    imgSrc = imgPrincipal.src //GUARDAMOS EL SRC ANTERIOR DE 'imgPrincipal'
    imgPrincipal.src = "../img/cloud-alpha-3.png" //CAMBIAMOS EL 'src' DE LA IMAGEN PRINCIPAL
})

imgSecundariaTres.addEventListener("mouseout" , () => {
    if(clickEvent === false){ //SI NO HAY EVENTE CLICK ENTRE MOUSEOVER Y MOUSEOUT
        imgPrincipal.src = imgSrc //VUELVE EL SRC A SU VALOR ANTERIOR
    }
})

imgSecundariaCuatro.addEventListener("mouseover" , () => {
    clickEvent = false //INICIALIZAMOS EN FALSE
    imgSrc = imgPrincipal.src //GUARDAMOS EL SRC ANTERIOR DE 'imgPrincipal'
    imgPrincipal.src = "../img/cloud-alpha-4.png" //CAMBIAMOS EL 'src' DE LA IMAGEN PRINCIPAL
})

imgSecundariaCuatro.addEventListener("mouseout" , () => {
    if(clickEvent === false){ //SI NO HAY EVENTE CLICK ENTRE MOUSEOVER Y MOUSEOUT
        imgPrincipal.src = imgSrc //VUELVE EL SRC A SU VALOR ANTERIOR
    }
})

//EVENTO CLICK
imgSecundariaUno.addEventListener("click" , () => {
    clickEvent = true //SI HAY CLICK SE LEVANTA LA FLAG
    imgPrincipal.src = "../img/cloud-alpha-1.png" //CAMBIAMOS EL 'src' DE LA IMAGEN
})

imgSecundariaDos.addEventListener("click" , () => {
    clickEvent = true //SI HAY CLICK SE LEVANTA LA FLAG
    imgPrincipal.src = "../img/cloud-alpha-2.png" //CAMBIAMOS EL 'src' DE LA IMAGEN
})

imgSecundariaTres.addEventListener("click" , () => {
    clickEvent = true //SI HAY CLICK SE LEVANTA LA FLAG
    imgPrincipal.src = "../img/cloud-alpha-3.png" //CAMBIAMOS EL 'src' DE LA IMAGEN
})

imgSecundariaCuatro.addEventListener("click" , () => {
    clickEvent = true //SI HAY CLICK SE LEVANTA LA FLAG
    imgPrincipal.src = "../img/cloud-alpha-4.png" //CAMBIAMOS EL 'src' DE LA IMAGEN
})