function validar() {
    var correo = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;
    var rep_contraseña = document.getElementById('rep_password').value;

    if (correo === 'kai@ros.com') {
        alert('correo electronico valido')
    }
    if (contraseña === rep_contraseña) {
        alert('Contraseña cambiada con exito');
    } else {
        alert('Las contraseñas no coinciden');
    }
}
