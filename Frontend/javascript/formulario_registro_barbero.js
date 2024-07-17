// Función para alternar entre inicio de sesión y registro
function toggleForm() {
    var accion = document.getElementById('accion').value;
    var registroFields = document.getElementById('registroFields');
    
    if (accion === 'registro') {
        registroFields.style.display = 'block';
    } else {
        registroFields.style.display = 'none';
    }
}

// Función para mostrar el popup
function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// Función para cerrar el popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Obtener el formulario de registro
var formRegistro = document.getElementById("loginOrRegisterForm");

// Agregar un evento de escucha para el envío del formulario
formRegistro.addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe normalmente
    event.preventDefault();
    
    // Realizar cualquier lógica de validación o envío de datos aquí
    
    // Mostrar el popup de registro exitoso
    showPopup();
});

// Función para alternar entre inicio de sesión y registro
function toggleForm() {
    var accion = document.getElementById('accion').value;
    var registroFields = document.getElementById('registroFields');
    var submitButton = document.getElementById('submitButton');
    
    if (accion === 'registro') {
        registroFields.style.display = 'block';
        submitButton.innerText = 'Enviar'; // Cambiar texto del botón a "Enviar"
    } else {
        registroFields.style.display = 'none';
        submitButton.innerText = 'Ingresar'; // Cambiar texto del botón a "Ingresa"
    }
}
