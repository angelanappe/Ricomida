//para Tooltips:
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//js para evento Click
$(document).ready(function() {
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
    });
});

//js para cambiar a color rojo INGREDIENTES y PREPARACION
$(document).ready(function() {
    //INGREDIENTES
    $("#titulo_ingredientes").on("dblclick", function() {
        $(this).toggleClass("rojo");
    });

    //PREPARACION
    $("#titulo_preparacion").on("dblclick", function() {
        $(this).toggleClass("rojo");
    });
});

//js para desaparecer cards
$(document).ready(function() {
    $(".card-title").click(function() {
        //esta linea juega con: desaparece-aparece 
        $(this).next(".card-text").toggle();
    });
});