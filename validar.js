
document.addEventiListener("DOMContentLoaded",()=>{})

const form = document.querySelector("form");


const mostrarError = (input,mensaje) =>{

    const divPadre = input.padrentNode;
    const errorText = divPadre.querySelector(".error-text")
    divPadre.classList.add("error");
    errorText.innerText = mensaje;

}
const input = document.querySelector("email");
const mensaje = "campo obligatorio"; 

const eliminarError = input =>{
    const divPadre = input.padrentNode;
    divPadre.classList.remove("error");
    const errorText = divPadre.querySelector(".error-text");
    errorText.innerText = "";
}   
const formulario = document.querySelector("form");
formulario.querySelectorAll("input").forEach(input => {
        input.addEventListener("change",() =>{
            const valor = input.value.trim(); 
        
            if (valor !== "") {
                eliminarError(input);
            }
        })
})
function validarCampo(campoId, mensaje){
    const campo = document.getElementById(campoId);
    const value = campo.value.trim();

    if (value == ""){
        mostrarError(campo, mensaje);
        return false;
    }else{
        eliminarError(campo)
        return true;
    }

}
    function isEmail(email){
        const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegular.test(email); 
    }

    function validarEmail(campoId, mensaje){
        const campo = document.getElementById(campoId);
        const email = campo.value.trim();

        if(email === ""){
            mostrarError(campo, "el correo electronico es obligatorio")
            return false

        }else if{!isEmail(email){
            mostrarError(campo, mensaje);
            return false
        } else {
            eliminarError(campo);
            return true
        }
    
    }
    }

    const validarFormulario = () => {
        let validar = true;
        validar = validarEmail("email", "el correo electronico no es válido") && validar; 
        validar = validarCampo("password", "la contraseña es obligatoria") && validar; 
        return validar;

    }
    formulario.addEventListener("submir",event => {
        event.preventDefault();
        if (!validarFormulario()){
            event.preventDefalut()
            console.log("El formulario no es valido");

        } else {
            event.preventDefault();
            console.log("El formulario es valido...");

        }

    })
