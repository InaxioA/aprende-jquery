$(document).ready(function () {
    // Mostramos el contenido del primer panel
    $('.panel__contenido').first().slideDown();

    // Event listeners
    $('.panel__cabecera').on('click', function (evt) {
        evt.preventDefault();
        $('.panel__cabecera').not(this).siblings('.panel__contenido').slideUp(); // cerrar el resto
        $(this).siblings('.panel__contenido').slideToggle();
    });
});
