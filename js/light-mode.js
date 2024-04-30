const btnLightMode = document.getElementById("btnMode") //BOTON DARK/LIGHT MODE 'index.html'
let colorMode = localStorage.getItem("color-mode") //CREAMOS VARIABLE PARA EL LOCAL STORAGE

if(!colorMode){ //SETEAMOS POR DEFAULT POR PRIMERA VEZ
    localStorage.setItem("color-mode" , "dark-mode")
}

//ID'S HR'S
const hrFooter = document.getElementById("hrFooter")
const hrMain = document.getElementById("hrMain")

//CLASES/ID'S 'index.html'
//querySelectorAll
const nombreProducto = document.querySelectorAll(".nombreProducto")
const precioProducto = document.querySelectorAll(".precioProducto")
const btnComprar = document.querySelectorAll(".btnComprar")
const btnCarrito = document.querySelectorAll(".btnCarrito")
const producto = document.querySelectorAll(".producto")
const btnLink = document.querySelectorAll(".btnLink")
//getElementById
const precioTotalCarrito = document.getElementById("precioTotalCarrito")
const precioCarrito = document.getElementById("precioCarrito")
const logoCarrito = document.getElementById("logoCarrito")
const productos = document.getElementById("productos")
const sideBar = document.getElementById("sideBar")
const main = document.getElementById("main")

//CLASES/ID'S HEADER
//querySelectorAll
const navegacion = document.querySelectorAll(".navegacion")
const itemNav = document.querySelectorAll(".itemNav")
//getElementById
const headerContainer = document.getElementById("headerContainer")
const btnSearchBar = document.getElementById("btnSearchBar")
const listaHeader = document.getElementById("listaHeader")
const searchTool = document.getElementById("searchTool")
const searchBar = document.getElementById("searchBar")
const barraNav = document.getElementById("barraNav")
const imgLogo = document.getElementById("imgLogo")

//CLASES/ID'S FOOTER
//querySelectorAll
const linkFooter = document.querySelectorAll(".linkFooter")
//getElementById
const divListaFooter = document.getElementById("divListaFooter")
const btnMode = document.getElementById("btnMode")
const footer = document.getElementById("footer")

if(colorMode === "light-mode"){
    //ID'S HR'S
    hrFooter.classList.add("hrFooterLightMode")
    hrMain.classList.add("hrMainLightMode")

    //CLASES 'index.html'
    //CLASES 'producto'
    producto.forEach((prod) => {
        prod.classList.add("productoLightMode")
    })
    //CLASES 'nombreProducto'
    nombreProducto.forEach((nombreProd) => {
        nombreProd.classList.add("nombreProductoLightMode")
    })
    //CLASES 'precioProducto'
    precioProducto.forEach((precioProd) => {
        precioProd.classList.add("precioProductoLightMode")
    })
    //CLASES 'btnComprar'
    btnComprar.forEach((btn) => {
        btn.classList.add("btnComprarLightMode")
    })
    //CLASES 'btnLink'
    btnLink.forEach((btn) => {
        btn.classList.add("btnLinkLightMode")
    })
    //CLASES 'btnCarrito'
    btnCarrito.forEach((btn) => {
        btn.classList.add("btnCarritoLightMode")
    })
    //ID'S 'index.html'
    precioTotalCarrito.classList.add("precioTotalCarritoLightMode")
    precioCarrito.classList.add("precioCarritoLightMode")
    logoCarrito.classList.add("logoCarritoLightMode")
    productos.classList.add("productosLightMode")
    sideBar.classList.add("sideBarLightMode")
    main.classList.add("mainLightMode")

    //CLASES HEADER
    //CLASES 'navegacion'
    navegacion.forEach((nav) => {
        nav.classList.add("navegacionLightMode")
    })
    //CLASES 'itemNav'
    itemNav.forEach((nav) => {
        nav.classList.add("itemNavLightMode")
    })
    //ID'S HEADER
    headerContainer.classList.add("headerContainerLightMode")
    btnSearchBar.classList.add("btnSearchBarLightMode")
    listaHeader.classList.add("listaHeaderLightMode")
    searchTool.classList.add("searchToolLightMode")
    searchBar.classList.add("searchBarLightMode")
    barraNav.classList.add("barraNavLightMode")
    imgLogo.classList.add("imgLogoLightMode")

    //CLASES FOOTER
    //CLASES 'linkFooter'
    linkFooter.forEach((link) => {
        link.classList.add("linkFooterLightMode")
    })
    //ID'S FOOTER
    divListaFooter.classList.add("divListaFooterLightMode")
    btnMode.classList.add("btnModeLightMode")
    footer.classList.add("footerLightMode")
}

btnLightMode.addEventListener("click" , () => {
    colorMode = localStorage.getItem("color-mode") //TRAEMOS EL VALOR DE 'color-mode'
    if(colorMode === "dark-mode"){
        localStorage.setItem("color-mode" , "light-mode")
    }else{
        localStorage.setItem("color-mode" , "dark-mode")
    }
    
    //ID'S HR'S
    hrFooter.classList.toggle("hrFooterLightMode")
    hrMain.classList.toggle("hrMainLightMode")

    //CLASES 'index.html'
    //CLASES 'producto'
    producto.forEach((prod) => {
        prod.classList.toggle("productoLightMode")
    })
    //CLASES 'nombreProducto'
    nombreProducto.forEach((nombreProd) => {
        nombreProd.classList.toggle("nombreProductoLightMode")
    })
    //CLASES 'precioProducto'
    precioProducto.forEach((precioProd) => {
        precioProd.classList.toggle("precioProductoLightMode")
    })
    //CLASES 'btnComprar'
    btnComprar.forEach((btn) => {
        btn.classList.toggle("btnComprarLightMode")
    })
    //CLASES 'btnLink'
    btnLink.forEach((btn) => {
        btn.classList.toggle("btnLinkLightMode")
    })
    //CLASES 'btnCarrito'
    btnCarrito.forEach((btn) => {
        btn.classList.toggle("btnCarritoLightMode")
    })
    //ID'S 'index.html'
    precioTotalCarrito.classList.toggle("precioTotalCarritoLightMode")
    precioCarrito.classList.toggle("precioCarritoLightMode")
    logoCarrito.classList.toggle("logoCarritoLightMode")
    productos.classList.toggle("productosLightMode")
    sideBar.classList.toggle("sideBarLightMode")
    main.classList.toggle("mainLightMode")

    //CLASES HEADER
    //CLASES 'navegacion'
    navegacion.forEach((nav) => {
        nav.classList.toggle("navegacionLightMode")
    })
    //CLASES 'itemNav'
    itemNav.forEach((nav) => {
        nav.classList.toggle("itemNavLightMode")
    })
    //ID'S HEADER
    headerContainer.classList.toggle("headerContainerLightMode")
    btnSearchBar.classList.toggle("btnSearchBarLightMode")
    listaHeader.classList.toggle("listaHeaderLightMode")
    searchTool.classList.toggle("searchToolLightMode")
    searchBar.classList.toggle("searchBarLightMode")
    barraNav.classList.toggle("barraNavLightMode")
    imgLogo.classList.toggle("imgLogoLightMode")

    //CLASES FOOTER
    //CLASES 'linkFooter'
    linkFooter.forEach((link) => {
        link.classList.toggle("linkFooterLightMode")
    })
    //ID'S FOOTER
    divListaFooter.classList.toggle("divListaFooterLightMode")
    btnMode.classList.toggle("btnModeLightMode")
    footer.classList.toggle("footerLightMode")
})

//METER LOS 'carritoContainer' ADENTRO DE UN DIV, DESDE ESE DIVE SE VAN A CREAR LOS 'carritoContainer' DESDE EL JS
//LOS ELEMENTOS ADENTRO DE 'carritoContainer' Y 'carritoContaier' NO EXISTEN A MENOS QUE HAYA 1 O MAS PRODUCTOS EN EL CARRITO, ENTONCES TENGO QUE HACER ALGO PARA QUE NO SE INTERPONGA CON EL...
//LIGHTMODE SI ES QUE NO HAY NINGUN PRODUCTO EN EL CARRITO TENGO QUE VERIFICAR SI EL 'color-mode' ESTA EN 'light-mode' PARA QUE SE DECLARE Y SE ACTIVE

//PUEDO HACERLO ADENTRO DE LA FUNCION actualizarCarrito() MAS ADELANTE EN 'script.js'