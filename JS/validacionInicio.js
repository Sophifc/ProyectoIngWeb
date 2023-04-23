const email = document.getElementById("email");
const pass = document.getElementById("contra");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	let isPass=  /^.{4,12}$/;
    parrafo.innerHTML = "";

    var email1 = document.getElementById("email").value;
    console.log(email1);

    var contra1 = document.getElementById("contra").value;
    console.log(contra1);

    if(!isEmail.test(email.value) || !isPass.test(pass.value)){
        warnings += `Contraseña o correo no valido, intentelo denuevo`
        entrar = true
    }

	
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Inicio de sesión"
    }
})