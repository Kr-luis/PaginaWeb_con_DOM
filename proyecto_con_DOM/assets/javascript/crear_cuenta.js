function crear_cuenta() {
    var nombres = document.getElementById('firstname').value;
    var apellidos = document.getElementById('lastname').value;
    var correo = document.getElementById('email').value;
    var edad = document.getElementById('age').value;
    var notificaciones = document.getElementById('notifications').value;

    if (edad < 0) {
        alert('Ingrese una edad validad');
    } else {
        alert('cuenta creada con exito')
    }
}