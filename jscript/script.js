const formulario = document.getElementById("formulario");

const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  mensaje: /^[a-zA-ZÀ-ÿ\s]{1,400}$/, // Letras, numeros, guion , guion_bajo y acentos
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

const campos = {
  mensaje: false,
  nombre: false,
  email: false,
  telefono: false

}

const validarFormulario = (e) => {
  switch (e.target.name){
     case "nombre" :
       validarCampo(expresiones.nombre,e.target,'nombre');
     break
     case "mensaje" :
      validarCampo(expresiones.mensaje,e.target,'mensaje');
     break
     case "email" :
      validarCampo(expresiones.email, e.target,'email');
     break
     case "telefono" :
      validarCampo(expresiones.telefono,e.target,'telefono');
     break
    }
  }

const validarCampo = (expresion, input , campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('formulario-grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add("formulario-grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-check");
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-xmark");
    document.querySelector(`#grupo__${campo} .form-input-error`).classList.remove("form-input-error-activo")
    campos[campo] = true;
  } else{
      document.getElementById(`grupo__${campo}`).classList.add("formulario-grupo-incorrecto");
      document.getElementById(`grupo__${campo}`).classList.remove("formulario-grupo-correcto");
      document.querySelector(`#grupo__${campo} i`).classList.add("fa-circle-xmark");
      document.querySelector(`#grupo__${campo} i`).classList.remove("fa-circle-check")
      document.querySelector(`#grupo__${campo} .form-input-error`).classList.add("form-input-error-activo")
      campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup" , validarFormulario);
    input.addEventListener("blur" , validarFormulario);
    
});

formulario.addEventListener("submit", (e) => {
        e.preventDefault();
 
        if(campos.nombre && campos.email && campos.mensaje && campos.telefono){
        formulario.reset();

          document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) => {
              icono.classList.remove('formulario-grupo-correcto');
          })

  }

});
 
