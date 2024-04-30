const formLogIn = document.getElementById("formLogIn") //AGARRAMOS EL FORMULARIO
const inputEmail = document.getElementById("inputEmail") //AGARRAMOS EL INPUT DEL EMAIL
const inputUsuario = document.getElementById("inputUsuario") //AGARRAMOS EL INPUT DEL USUARIO
const inputPassword = document.getElementById("inputPassword") //AGARRAMOS EL INPUT DE LA PASSWORD

let newUser = [] //OBJETO DONDE VAMOS A GUARDAR LOS USUARIOS
let userJSON = [] //VARIABLE QUE VAMOS A USAR PARA PASAR EL OBJETO A JSON
let contadorUsuarios = localStorage.getItem("Usuarios") //CREAMOS UN CONTADOR DE USUARIOS
if(contadorUsuarios === null || newUser === null){ //SI NO EXISTE 'contadorUsuario' O 'newUser' NO TIENE NADA GUARDADO CREAMOS/RESETEAMOS EL CONTADOR EN 0
    contadorUsuarios = 0
}else{
    contadorUsuarios = parseInt(contadorUsuarios) //LO PASAMOS A ENTERO
}
formLogIn.addEventListener("submit" , (event) => {
    contadorUsuarios++ //1ER USUARIO, 2DO USUARIO...
    event.preventDefault() //PARA QUE NO SE RECARGUE LA PAGINA

    let inpEmail = inputEmail.value //GUARDAMOS EL VALUE DEL EMAIL
    let inpUsuario = inputUsuario.value //GUARDAMOS EL VALUE DEL USUARIO
    let inpPassword = inputPassword.value //GUARDAMOS EL VALUE DE LA PASSWORD

    newUser[contadorUsuarios] =  { ////GUARDAMOS EL VALUE EN UN OBJETO DE TIPO USUARIO EN LA POSICION 'contadorUsuarios' QUE INDICA EL NUMERO DE USUARIO
        Email: inpEmail,
        Usuario: inpUsuario,
        Password: inpPassword
    }

    localStorage.setItem("Usuarios" , contadorUsuarios) //GUARDMOS EL VALOR DE 'contadorUsuarios' EN EL LOCAL STORAGE
    if(newUser[contadorUsuarios].Email.trim() !== "" && newUser[contadorUsuarios].Usuario.trim() !== "" && newUser[contadorUsuarios].Password.trim() !== ""){ //VERIFICAMOS QUE NO SEA NULL
        userJSON[contadorUsuarios] = JSON.stringify(newUser[contadorUsuarios]) //PASAMOS EL OBJETO A JSON EN LA POSICION 'acc' QUE INDICA EL NUMERO DE USUARIO
        localStorage.setItem("Usuario " + contadorUsuarios , userJSON[contadorUsuarios]) //SUBIMOS A LOCAL STORAGE EN FORMATO JSON
    } 
    formLogIn.reset() //RESETEAMOS EL FORM
    Swal.fire({
        icon: "success",
        showCloseButton: true,
        title: `${newUser[contadorUsuarios].Usuario.toUpperCase()}`,
        text: `GRACIAS POR REGISTRARTE`
    })
})