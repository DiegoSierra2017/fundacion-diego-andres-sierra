<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$asunto = $_POST['asunto'];

$to = 'Diegomarcia10@gmail.com ';

$from = 'Diegomarcia10@gmail.com ';

if($nombre && $email && $telefono && $mensaje && $asunto) {
		$headers = "From:  $from \r\n";
		$headers .= "Reply-To:  $nombre<$email> \r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$respuesta = mail($to, $asunto, $mensaje, $headers);
		if($respuesta){
			echo 'Mensaje enviado correctamente!';
		} else {
			echo 'Error enviando el mensaje, intente de nuevo más tarde.';
		}
} else {
	echo 'Todos los campos son requeridos.';
}