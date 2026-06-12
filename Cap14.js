// // Seleccionar el formulario y encviar el eevento (refactorizado para evitar la repeticion del evento) 
// let formulario = document.querySelector("#formulario");

// // Evento para el envio del formulario
// formulario.addEventListener("submit", function(event) {})
//    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

//    // Capturar el valor de input
//    let nombre = document.querySelector("#nombre").value;
// 
//    console.log("Formulario enviado");
//    console.log(nombre); // Mostrar el valor del input
// });

// Seleccionar el formulario
let formulario =
        "submit",
        function(event) {

            event.preventSDefault();

            console.log("Formulario enviado");
        } 

    );

    // capturar el valor del input
    let nombre =
    document.querySelector("#nombre");

    formulario.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            console.log(nombre.value);

        }
    );
