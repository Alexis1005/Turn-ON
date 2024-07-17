console.log('El archivo JavaScript se ha cargado correctamente.');

document.addEventListener("DOMContentLoaded", function () {
  const formularioReserva = document.getElementById("appointments"); // Obtenemos el elemento del formulario
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");

  // Mostrar formulario al hacer clic en "Reserva ahora"
  document
    .getElementById("reservaAhora")
    .addEventListener("click", function () {
      formularioReserva.style.display = "block";
       // Cambiamos el estilo del formulario para hacerlo visible
       formularioReserva.scrollIntoView({behavior: "smooth"});  
      });

  // Restringir las fechas disponibles a las dos semanas posteriores a la fecha actual
  const today = new Date();
  const maxDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000); // 14 días después
  const maxDateString = maxDate.toISOString().split("T")[0];
  dateInput.setAttribute("min", today.toISOString().split("T")[0]); // Restringir a partir de hoy
  dateInput.setAttribute("max", maxDateString); // Restringir hasta dos semanas después

  // Actualizar las horas disponibles al seleccionar una fecha
  dateInput.addEventListener("input", function () {
    const selectedDate = new Date(dateInput.value);
    const selectedDateString = selectedDate.toISOString().split("T")[0];
    const todayString = today.toISOString().split("T")[0];

    if (selectedDateString === todayString) {
      // Si se selecciona la fecha actual, mostrar horas a partir de la hora actual
      const currentHour = today.getHours();
      timeInput.setAttribute(
        "min",
        `${currentHour.toString().padStart(2, "0")}:00`
      );
    } else {
      // Para otras fechas, mostrar todas las horas disponibles
      timeInput.removeAttribute("min");
    }
  });
});
