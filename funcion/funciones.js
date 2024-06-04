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
        window.location.href = "../assets/index_perfil.html";
    } else {
        alert("Correo o contraseña incorrectos");
    }
}
let recetario = [
    {
        nombre: "EMPANADA DE POLLO",
        ingredientes: ["Harina para empanar,Pollo desmenuzado,Cebolla picada,Ajo picado,Perejil picado,Sal y pimienta al gusto,Aceite vegetal para freír"],
        preparacion: ["Mezcla el pollo desmenuzado con la cebolla, ajo, perejil, sal y pimienta.", "Envuelve la mezcla en masa de harina para hacer las empanadas.", "Fríe las empanadas en aceite caliente hasta que estén doradas."]
    },
    {
        nombre: "TORTILLA ESPAÑOLA",
        ingredientes: ["Patatas cortadas en rodajas,Cebolla picada,Ajo picado,Aceite de oliva,Huevos,Sal y pimienta al gusto"],
        preparacion: ["Sauté la cebolla y el ajo en aceite de oliva hasta que estén transparentes.", "Agrega las patatas cortadas y cocina hasta que estén tiernas.", "Vierte los huevos batidos sobre la mezcla y revuelve suavemente.", "Cocina hasta que los huevos estén firmes y la tortilla se pueda voltear fácilmente."]
    },
    {
        nombre: "ENSALADA CESAR",
        ingredientes: ["Lechuga romana,Pollo a la plancha,Anchoas filleted,Ralladuras de parmesano,Mayonesa casera,Aceitunas negras,Limón"],
        preparacion: ["Tuesta el pan para croutons en el horno o en una sartén con un poco de mantequilla.", "En un bol grande, mezcla la mayonesa con jugo de limón y ralladuras de parmesano.", "Empapa la lechuga romana con la salsa de mayonesa.", "Adorna con el pollo a la plancha, anchoas, aceitunas y croutons."]
    },
    {
        nombre: "FLAN DE HUEVO",
        ingredientes: ["Huevos,Azúcar,Leche condensada,Esencia de vainilla,Cáscara de huevo rallada"],
        preparacion: ["Batir los huevos con azúcar hasta obtener una mezcla espumosa.", "Agregar leche condensada, esencia de vainilla y cáscara de huevo rallada.", "Verter la mezcla en moldes para flan y cocinar en baño María en el horno a baja temperatura durante aproximadamente 30 minutos."]
    },
    {
        nombre: "SOPA DE FIDEOS",
        ingredientes: ["Fideos,Caldo de pollo,Verduras (zanahorias, pimientos, cebollas),Especias (comino, curry),Crema de leche,Queso rallado"],
        preparacion: ["Hierve el caldo de pollo con verduras y especias.", "Agrega los fideos y cocina hasta que estén tiernos.", "Antes de servir, añade crema de leche y queso rallado.", "Sirve caliente."]
    },
    {
        nombre: "PASTEL DE MANZANA",
        ingredientes: ["Manzanas cortadas en rodajas,Azúcar,Masa de hojaldre,Canela"],
        preparacion: ["Espolvorea azúcar y canela sobre las manzanas cortadas.", "Coloca las manzanas en un molde para pastel cubierto con masa de hojaldre.", "Hornea a temperatura media hasta que la masa esté dorada y las manzanas estén tiernas."]
    },
    {
        nombre: "CHURRASCOS DE CERDO",
        ingredientes: ["Chuletas de cerdo,Sal y pimienta,Aceite vegetal,Cebolla picada,Tomate pelado y cortado en trozos,Vinagre balsámico"],
        preparacion: ["Asa las chuletas de cerdo en una parrilla caliente hasta que estén bien hechas.", "En una sartén, fríe la cebolla y el tomate con un poco de aceite.", "Vierte vinagre balsámico y deja reducir a fuego medio.", "Sirve las chuletas acompañadas de la salsa de cebolla y tomate."]
    },
    {
        nombre: "ARROZ CON POLLO",
        ingredientes: ["Arroz blanco,Pollo a la plancha,Sofrito de tomate y cebolla,Caldo de pollo,Especias (curry, comino),Zanahoria cortada en cubitos"],
        preparacion: ["Sofría el sofrito de tomate y cebolla en aceite.", "Agrega el arroz y cocina hasta que esté transparente.", "Vierte el caldo de pollo caliente y las especias, luego agrega las zanahorias y el pollo a la plancha.", "Cocina a fuego lento hasta que el arroz absorba todo el líquido y esté cocido."]
    },
    {
        nombre: "TACOS DE PESCADO",
        ingredientes: ["Filete de pescado,Tortillas de maíz,Cebolla picada,Aguacate cortado en rodajas,Jitomates cherry,Mayonesa"],
        preparacion: ["Asa el filete de pescado en una sartén con un poco de aceite hasta que esté bien cocido.", "Calienta las tortillas de maíz en una sartén o en el microondas.", "Monta los tacos con el pescado, cebolla, aguacate, jitomates cherry y mayonesa."]
    },
    {
        nombre: "BROWNIE DE CHOCOLATE",
        ingredientes: ["Chocolate negro fundido,Azúcar,Huevos,Mantequilla derretida,Harina,Levadura en polvo,Especias (cacao en polvo opcional)"],
        preparacion: ["Bate los huevos con azúcar hasta obtener una mezcla espumosa.", "Agrega la mantequilla derretida y el chocolate fundido, mezclando bien.", "Incorpora la harina, levadura en polvo y especias, mezclando suavemente hasta obtener una masa homogénea.", "Vierte la masa en un molde para hornear y hornea a temperatura media hasta que al insertar un palillo salga limpio."]
    }
]
function buscar() {
    const name = document.getElementById('nombre').value;
    const nameSe = name.trim()
    let nameM = nameSe.toUpperCase();
    let nombre;
    let ingredientes;
    let preparacion;
    for (let i = 0; i < recetario.length; i++) {
        if (recetario[i].nombre == nameM) {
            nombre = recetario[i].nombre;
            ingredientes = recetario[i].ingredientes;
            preparacion = recetario[i].preparacion;
            break;
        }
    }
    if (!nombre){
        alert("Ingrese valores de recetas existentes");
        document.getElementById('tit_receta').innerText = "";
        document.getElementById('ing_receta').innerText = "";
        document.getElementById('pre_receta').innerText = "";
    } else {
        document.getElementById('tit_receta').innerText = "Receta: " + nombre;
        document.getElementById('ing_receta').innerText = "Ingredientes: " + ingredientes;
        //mostrando los ingredientes
        const lista = document.getElementById('pre_receta');
        const ul = document.createElement('ul');
        for (let i = 0; i < preparacion.length; i++) {
            const li = document.createElement('li');
            li.textContent = preparacion[i];
            ul.appendChild(li);
        }
        lista.appendChild(ul);
    }
}