(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(document).on('submit', '#form_contacto', function (e) {
            e.preventDefault();
            var nombre = $('#nombre').val();
            var email = $('#email').val();
            var asunto = $('#asunto').val();
            var telefono = $('#telefono').val();
            var mensaje = $('#mensaje').val();

            if (nombre && email && asunto && mensaje) {
                $.ajax({
                    type: "POST",
                    url: 'contacto.php',
                    data: {
                        'nombre': nombre,
                        'email': email,
                        'asunto': asunto,
                        'telefono': telefono,
                        'mensaje': mensaje,
                    },
                    success: function (data) {
                        $('#form_contacto').children('.email-success').remove();
                        $('#form_contacto').prepend('<span class="alert alert-success email-success">' + data + '</span>');
                        $('#nombre').val('');
                        $('#email').val('');
                        $('#asunto').val('');
                        $('#mensaje').val('');
                        $('#telefono').val('');
                        $('.email-success').fadeOut(10000);
                    },
                    error: function (res) {

                    }
                });
            } else {
                $('#form_contacto').children('.email-success').remove();
                $('#form_contacto').prepend('<span class="alert alert-danger email-success">Todos los campos son requeridos.</span>');
                $('.email-success').fadeOut(3000);
            }

        });
    })

}(jQuery));