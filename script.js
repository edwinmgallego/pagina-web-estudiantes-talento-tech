document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeEnviado = document.getElementById("mensajeEnviado");

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    mensajeEnviado.classList.remove("oculto");

    // Limpia los campos del formulario
    document.getElementById("contactForm").reset();

    // Oculta el mensaje después de unos segundos
    setTimeout(() => {
        mensajeEnviado.classList.add("oculto");
    }, 4000);
});