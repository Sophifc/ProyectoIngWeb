const nombre = document.getElementById("name");
const usuario = document.getElementById("user");
const email = document.getElementById("email");
const pass = document.getElementById("contra");
const pass2 = document.getElementById("contra2");
const form = document.getElementById("formulario");
const telefono = document.getElementById("telefono");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	let isTelefono = /^\d{7,14}$/;
	let isUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
	let isPass=  /^.{4,12}$/;
	let isNombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    parrafo.innerHTML = "";

    if(!isNombre.test(nombre.value)){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }

    if(!isEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

	if(!isTelefono.test(telefono.value)){
        warnings += `El telefono no es valido <br>`
        entrar = true
    }

	if(!isUsuario.test(usuario.value)){
        warnings += `El usuario no es valido <br>`
        entrar = true
    }

	if(!isPass.test(pass.value)){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

	if(pass.value !== pass2.value){
		warnings += `Las contraseñas no son iguales <br>`
        entrar = true
	}

	
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})