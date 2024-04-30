const btnLightMode = document.getElementById("btnMode") //BOTON DARK/LIGHT MODE 'index.html'
let colorMode = localStorage.getItem("color-mode") //CREAMOS VARIABLE PARA EL LOCAL STORAGE

if(!colorMode){ //SETEAMOS POR DEFAULT POR PRIMERA VEZ
    localStorage.setItem("color-mode" , "dark-mode")
}

//ID'S HR'S
const hrFooterCompraProducto = document.getElementById("hrFooterCompraProducto")

//CLASES/ID'S 'compra-producto.js'
//querySelectorAll
const imgSecundaria = document.querySelectorAll(".imgSecundaria")
//getElementById
const containerComprarBtn = document.getElementById("containerComprarBtn")
const mainCompraProducto = document.getElementById("mainCompraProducto")
const mainContainer = document.getElementById("mainContainer")
const gridContainer = document.getElementById("gridContainer")
const imgPrincipal = document.getElementById("imgPrincipal")
const comprarBtn = document.getElementById("comprarBtn")

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
    hrFooterCompraProducto.classList.add("hrFooterCompraProductoLightMode")

    //CLASES 'compra-producto.html'
    //CLASE 'imgSecundaria'
    imgSecundaria.forEach((img) => {
        img.classList.add("imgSecundariaLightMode")
    })
    //ID'S 'compra-producto.html'
    mainCompraProducto.classList.add("mainCompraProductoLightMode")
    mainContainer.classList.add("mainContainerLightMode")
    gridContainer.classList.add("gridContainerLightMode")
    imgPrincipal.classList.add("imgPrincipalLightMode")
    containerComprarBtn.classList.add("containerComprarBtnLightMode")
    comprarBtn.classList.add("comprarBtnLightMode")

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
    hrFooterCompraProducto.classList.toggle("hrFooterCompraProductoLightMode")

    //CLASES 'compra-producto.html'
    //CLASE 'imgSecundaria'
    imgSecundaria.forEach((img) => {
        img.classList.toggle("imgSecundariaLightMode")
    })
    //ID'S 'compra-producto.html'
    mainCompraProducto.classList.toggle("mainCompraProductoLightMode")
    mainContainer.classList.toggle("mainContainerLightMode")
    gridContainer.classList.toggle("gridContainerLightMode")
    imgPrincipal.classList.toggle("imgPrincipalLightMode")
    containerComprarBtn.classList.toggle("containerComprarBtnLightMode")
    comprarBtn.classList.toggle("comprarBtnLightMode")

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