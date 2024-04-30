let carrito = [] //VARIABLE QUE REPERESENTA EL CARRITO
let clrMode = localStorage.getItem("color-mode") //TRAEMOS 'clrMode' DEL LOCAL STORAGE

const objetoProductos = [ //CARGAMOS LA INFORMACION DE LOS PRODUCTOS EN UN OBJETO
    {
        Titulo: "Hyperx | Cloud - Alpha",
        Precio: 150000,
        Imagen: "./img/cloud-alpha-1.png",
        Cantidad: 1,
        id: 1
    },
    {
        Titulo: "Steelseries | Apex - Pro",
        Precio: 300000,
        Imagen: "./img/apex-pro.png",
        Cantidad: 1,
        id: 2
    },
    {
        Titulo: "Razer | Hammerhead",
        Precio: 120000,
        Imagen: "./img/hammerhead.png",
        Cantidad: 1,
        id: 3
    },
    {
        Titulo: "Razer | Huntsman Mini",
        Precio: 140000,
        Imagen: "./img/huntsman-mini.png",
        Cantidad: 1,
        id: 4
    },
    {
        Titulo: "Logitech | Pro Superlight",
        Precio: 160000,
        Imagen: "./img/pro-superlight.png",
        Cantidad: 1,
        id: 5
    },
    {
        Titulo: "Finalmouse | Ultralight",
        Precio: 200000,
        Imagen: "./img/ultralight.png",
        Cantidad: 1,
        id: 6
    }
]

//CARGAMOS EL VALOR DEL DOLAR
let dolarBlue //VARIABLE QUE CONTIENE EL VALOR
precioDolar() //LLAMAMOS A LA FUNCION PARA OBTENER EL VALOR

async function precioDolar(){
    //API PRECIO DOLAR
    const response = await fetch('https://api.bluelytics.com.ar/v2/latest', {
        method: 'GET', //METODO GET PARA OBTENER EL VALOR DEL DOLAR
    })
    const data = await response.json()
    let dolarBlueADentro = data.blue //OBTENEMOS EL VALOR DEL DOLAR BLUE CON .blue

    dolarBlue = dolarBlueADentro.value_buy //GUARDAMOS EL VALOR DE COMPRA DEL DOLAR BLUE EN LA VARIABLE 'dolarBlue'
}

//CARGAMOS LOS PRODUCTOS DESDE JS
let contenedorProductos = document.getElementById("productos") //DIV QUE CONTIENE LOS PRODUCTOS

objetoProductos.forEach((objetoProducto) => {
    const div = document.createElement("div") //DIV QUE VA A CONTENER EL PRODUCTO
    div.classList.add("producto") //LE AGREGAMOS LA CLASE PRODUCTO

    //CARGAMOS EL DIV
    div.innerHTML = `
        <img src="${objetoProducto.Imagen}" alt="${objetoProducto.Titulo}" class="fotoProducto">
        <p class="nombreProducto"> ${objetoProducto.Titulo} </p>
        <p class="precioProducto"> ${objetoProducto.Precio}$ </p>
        <div class="btnContenedor">
            <button onclick="eventoAgregarAlCarrito(${objetoProducto.id})" class="btnCarrito"><i class="bi bi-cart-fill carrito"></i></button>
            <button class="btnComprar"><a href="./html/compra-producto.html" class="btnLink"> Comprar </a></button>
        </div>
    `
    contenedorProductos.append(div) //APPEND DEL DIV
})

function eventoAgregarAlCarrito(id){
    for (let i = 0; i < objetoProductos.length; i++) {
        if(objetoProductos[i].id == id){
            let esDuplicado = verificarDuplicadoCarrito(id)
            if(esDuplicado){ //SWEET ALERT
                Swal.fire({
                    icon: "error",
                    showCloseButton: true,
                    confirmButtonText: "Aceptar",
                    title: "CARRITO",
                    text: "EL PRODUCTO YA SE ENCUENTRA EN EL CARRITO"
                })
            }else{ //SI NO ESTA DUPLICADO SE MANDA AL CARRITO
                carrito.push(objetoProductos[i])
                actualizarAndAgregarAlCarrito()

                //TOASTIFY
                Toastify({
                    text: 'PRODUCTO AGREGADO <i class="bi bi-cart-check-fill"></i>',
                    position: "left",
                    gravity: "top",
                    duration: 2000,
                    style: {
                        background: "green",
                        color: "white"
                    },
                    offset: {
                        y: 200
                    },
                    escapeMarkup: false //PERMITE QUE EL HTML DENTRO DEL TEXTO SE CONVIERTA EN HTML
                }).showToast()
            }
        }
        
    }
}

const carritoProductos = document.getElementById("productosCarrito") //DIV DONDE VAN LOS PRODUCTOS DEL CARRITO
async function actualizarAndAgregarAlCarrito(){
    clrMode =localStorage.getItem("color-mode") //TRAEMOS 'clrMode' DEL LOCAL STORAGE PARA REVISAR SU VALOR
    let plantillaCarrito = "" //RESETEAMOS 'plantillaCarrito'
    let precioTotal = 0 //RESETEAMOS PRECIO TOTAL

    for (let i = 0; i < carrito.length; i++) {
        precioTotal += carrito[i].Precio * carrito[i].Cantidad //SUMAMOS EL PRECIO

        if(clrMode == "light-mode"){
            //CARGAMOS 'plantillaCarrito' EN DARK MODE
            plantillaCarrito += `
            <div class="carritoContainer carritoContainerLightMode">
                <p class="nombreProductoCarrito nombreProductoCarritoLightMode">${carrito[i].Titulo}</p>
                <button onclick="buttonSumar(${carrito[i].id})" class="btnSumar btnSumarLightMode"><i class="bi bi-plus-circle-fill"></i></button>
                <p class="cantidadProductoCarrito cantidadProductoCarritoLightMode">${carrito[i].Cantidad}</p>
                <button onclick="buttonRestar(${carrito[i].id})" class="btnRestar btnRestarLightMode"><i class="bi bi-dash-circle-fill"></i></button>
                <button onclick="buttonEliminar(${carrito[i].id})" class="btnEliminar btnEliminarLightMode"><i class="bi bi-trash3-fill"></i></button>
            </div>
            `
        }else{
            //CARGAMOS 'plantillaCarrito' EN DARK MODE
            plantillaCarrito += `
            <div class="carritoContainer">
                <p class="nombreProductoCarrito">${carrito[i].Titulo}</p>
                <button onclick="buttonSumar(${carrito[i].id})" class="btnSumar"><i class="bi bi-plus-circle-fill"></i></button>
                <p class="cantidadProductoCarrito">${carrito[i].Cantidad}</p>
                <button onclick="buttonRestar(${carrito[i].id})" class="btnRestar"><i class="bi bi-dash-circle-fill"></i></button>
                <button onclick="buttonEliminar(${carrito[i].id})" class="btnEliminar"><i class="bi bi-trash3-fill"></i></button>
            </div>
            `
        }
    }

    let totalEnDolares = parseInt(precioTotal / dolarBlue)
    document.getElementById("productosCarrito").innerHTML = plantillaCarrito //LE MANDAMOS 'plantillaCarrito' AL ELEMENTO CON EL ID 'productosCarrito'
    if(carrito.length == 0){
        document.getElementById("precioCarrito").innerText = "Carrito Vacio" //SI ESTA VACIO
    }else{
        document.getElementById("precioCarrito").innerText = `${precioTotal}$ | $${totalEnDolares}USD` //LE MANDAMOS EL PRECIO ACTUALIZADO A 'precioCarrito'
    }
}

function buttonSumar(id){
    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].id == id){
            carrito[i].Cantidad++ //SUMAMOS CANTIDAD
        }
    }

    actualizarAndAgregarAlCarrito() //LLAMAMOS A ACTUALIZAR CARRITO
}

function buttonRestar(id){
    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].id == id){
            if(carrito[i].Cantidad == 1){
                buttonEliminar(id) //SI SOLO HAY UNO, LLAMAMOS A 'buttonEliminar()'
            }else{
                carrito[i].Cantidad-- //RESTAMOS CANTIDAD
            }
        }
    }

    actualizarAndAgregarAlCarrito() //LLAMAMOS A ACTUALIZAR CARRITO
}

function buttonEliminar(id){
    const prodIndex = carrito.findIndex(item => item.id === id) //BUSCAMOS EL PRODUCTOS POR EL ID
    carrito[prodIndex].Cantidad = 1 //RESETEAMOS SU CANTIDAD
    carrito.splice(prodIndex, 1) //USAMOS SPLICE PARA BORRARLO
    

    //TOASTIFY
    Toastify({
        text: 'PRODUCTO ELIMINADO <i class="bi bi-cart-x-fill"></i>',
        position: "left",
        gravity: "top",
        duration: 2000,
        style: {
            background: "red",
            color: "white"
        },
        offset: {
            y: 200
        },
        escapeMarkup: false //PERMITE QUE EL HTML DENTRO DEL TEXTO SE CONVIERTA EN HTML
    }).showToast()
    
    actualizarAndAgregarAlCarrito() //LLAMAMOS A ACTUALIZAR CARRITO
}

function verificarDuplicadoCarrito(id){
    let esDuplicado = false
    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].id == id){ //BUSCAMOS POR ID
            esDuplicado = true
        }
        
    }

    return esDuplicado //DEVOLVEMOS TRUE(YA EXISTE EN EL CARRITO)/FALSE(NO EXISTE EN EL CARRITO)
}

//LIGHT MODE | CARRITO
const btnClrMode = document.getElementById("btnMode") //BOTON DARK/LIGHT MODE 'index.html'

//ELEMENTOS CARRITO SIDEBAR
const logoCarritoCompras = document.getElementById("logoCarrito")
const sideBarCarrito = document.getElementById("sideBar")

//ELEMENTOS DEL CARRITO
let cantidadProductoCarrito = document.querySelectorAll(".cantidadProductoCarrito")
let nombreProductoCarrito = document.querySelectorAll(".nombreProductoCarrito")
let carritoContainer = document.querySelectorAll(".carritoContainer")
let btnEliminar = document.querySelectorAll(".btnEliminar")
let btnRestar = document.querySelectorAll(".btnRestar")
let btnSumar = document.querySelectorAll(".btnSumar")

btnClrMode.addEventListener("click" , () => {
    if(logoCarritoCompras.classList.contains("carritoActivo")){ //SI ESTA EN DARK MODE CAMBIAMOS A LIGHT MODE
        logoCarritoCompras.classList.remove("carritoActivo")
        logoCarritoCompras.classList.add("carritoActivoLightMode")
    }

    if(logoCarritoCompras.classList.contains("carritoActivoLightMode")){ //SI ESTA EN LIGHT MODE CAMBIAMOS A DARK MODE
        logoCarritoCompras.classList.add("carritoActivo")
        logoCarritoCompras.classList.remove("carritoActivoLightMode")
    }

    if(carrito.length >= 1){ //SI HAY PRODUCTOS EN EL CARRITO CAMBIAMOS DE COLOR MODE
        cantidadProductoCarrito = document.querySelectorAll(".cantidadProductoCarrito")
        cantidadProductoCarrito.forEach((cart) => {
            cart.classList.toggle("cantidadProductoCarritoLightMode")
        })
        nombreProductoCarrito = document.querySelectorAll(".nombreProductoCarrito")
        nombreProductoCarrito.forEach((cart) => {
            cart.classList.toggle("nombreProductoCarritoLightMode")
        })
        carritoContainer = document.querySelectorAll(".carritoContainer")
        carritoContainer.forEach((cart) => {
            cart.classList.toggle("carritoContainerLightMode")
        })
        btnEliminar = document.querySelectorAll(".btnEliminar")
        btnEliminar.forEach((cart) => {
            cart.classList.toggle("btnEliminarLightMode")
        })
        btnRestar = document.querySelectorAll(".btnRestar")
        btnRestar.forEach((cart) => {
            cart.classList.toggle("btnRestarLightMode")
        })
        btnSumar = document.querySelectorAll(".btnSumar")
        btnSumar.forEach((cart) => {
            cart.classList.toggle("btnSumarLightMode")
        })
    }
})

logoCarritoCompras.addEventListener("click" , () => {
    clrMode = localStorage.getItem("color-mode") //TRAEMOS 'clrMode' DEL LOCAL STORAGE PARA REVISAR SU VALOR
    sideBarCarrito.classList.toggle("d-none") //d-none => display: none;

    if(sideBarCarrito.classList.contains("d-none")){
        logoCarritoCompras.classList.remove("carritoActivo") //NO ESTA ACTIVO PORQUE TIENE 'd-none'
        logoCarritoCompras.classList.remove("carritoActivoLightMode") //NO ESTA ACTIVO PORQUE TIENE 'd-none'
    }else{ //ESTA ACTIVO PORQUE NO TIENE 'd-none'
        if(clrMode === "light-mode"){
            logoCarritoCompras.classList.toggle("carritoActivoLightMode") //LIGHT MODE
        }else{
            logoCarritoCompras.classList.toggle("carritoActivo") //DARK MODE
        }
    }
})