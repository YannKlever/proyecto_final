function confirmar() {
    let v_nombres = document.getElementById("in_nombre").value.trim();
    let v_apellidos = document.getElementById("in_apellido").value.trim();
    let v_fecha = new Date(document.getElementById("in_fecha").value);
    let mes_reg = String(v_fecha.getMonth() + 1).padStart(2, '0');
    let dia_reg = String(v_fecha.getDate()).padStart(2, '0');
    let anio_reg = String(v_fecha.getFullYear());
    let num_format = dia_reg + mes_reg + anio_reg;
    let v_genero = document.getElementById("in_gen").value;
    v_correo_creado = document.getElementById("in_correo").value.trim();
    v_contra_creada = document.getElementById("in_reg_contra").value;
    let v_contra_conf = document.getElementById("in_conf_contra").value;
    if (!v_nombres || !v_apellidos || !v_genero || !v_correo_creado || !v_contra_creada || !v_contra_conf || isNaN(v_fecha)) {
        alert("Por favor ingrese todos los valores requeridos");
        return;
    } else {
        if (v_contra_creada != v_contra_conf) {
            alert("Las contraseñas no coinciden");
            return;
        } else {
            alert("Registro completado");
            localStorage.setItem('correoCreado', v_correo_creado);
            localStorage.setItem('contraCreada', v_contra_creada);
            window.location.href = "./assets/index_login.html";
        }
    }
}
function ingresar() {
    let v_correo_lg = document.getElementById("in_correo_lg").value.trim();
    let v_contra_lg = document.getElementById("in_contra_lg").value;
    let correoCreado = localStorage.getItem('correoCreado');
    let contraCreada = localStorage.getItem('contraCreada');
    if (v_correo_lg === correoCreado && v_contra_lg === contraCreada) {
        alert("Ingreso exitoso, bienvenido");
    } else {
        alert("Correo o contraseña incorrectos");
    }
}
