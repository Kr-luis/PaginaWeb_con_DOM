function validar() {
    var usuario = document.getElementById('username').value;
    var contraseña = document.getElementById('password').value;

    if (usuario == '' || contraseña == '') {
        alert('Ingrese sus credenciales');
    } else {
        if (usuario == 'Luis' && contraseña == '123456') {
            location.href = "Inicio.html";
            alert('Inicio de sesión exitoso');
        } else {
            alert('Credenciales incorrectas');
        }
    }
}

function crear() {
    location.href = "crear_cuenta.html";
}