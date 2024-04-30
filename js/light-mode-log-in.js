const btnLightMode = document.getElementById("btnMode") //BOTON DARK/LIGHT MODE 'index.html'
let colorMode = localStorage.getItem("color-mode") //CREAMOS VARIABLE PARA EL LOCAL STORAGE

if(!colorMode){ //SETEAMOS POR DEFAULT POR PRIMERA VEZ
    localStorage.setItem("color-mode" , "dark-mode")
}

//CLASES/ID'S 'log-in.html'
//querySelectorAll
const input = document.querySelectorAll(".input")
const inp = document.querySelectorAll(".inp")
//getElementById
const containerPadre = document.getElementById("containerPadre")
const container = document.getElementById("container")
const h2Form = document.getElementById("h2Form")
const submit = document.getElementById("submit")

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
    //CLASES 'log-in.html'
    //CLASES 'input'
    input.forEach((inp) => {
        inp.classList.add("inputLightMode")
    })
    //CLASES 'inp'
    inp.forEach((i) => {
        i.classList.add("inpLightMode")
    })
    //ID'S 'log-in.html'
    containerPadre.classList.add("containerPadreLightMode")
    container.classList.add("containerLightMode")
    h2Form.classList.add("h2FormLightMode")
    submit.classList.add("submitLightMode")

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

    //CLASES 'log-in.html'
    //CLASES 'input'
    input.forEach((inp) => {
        inp.classList.toggle("inputLightMode")
    })
    //CLASES 'inp'
    inp.forEach((i) => {
        i.classList.toggle("inpLightMode")
    })
    //ID'S 'log-in.html'
    containerPadre.classList.toggle("containerPadreLightMode")
    container.classList.toggle("containerLightMode")
    h2Form.classList.toggle("h2FormLightMode")
    submit.classList.toggle("submitLightMode")
    
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
    //ID'S HEADER
    linkFooter.forEach((link) => {
        link.classList.toggle("linkFooterLightMode")
    })
    //ID'S FOOTER
    divListaFooter.classList.toggle("divListaFooterLightMode")
    btnMode.classList.toggle("btnModeLightMode")
    footer.classList.toggle("footerLightMode")
})