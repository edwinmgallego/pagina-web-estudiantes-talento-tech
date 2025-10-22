// Seleccionar todos los botones de redes sociales
const socialButtons = document.querySelectorAll('.social-btn');

// Agregar evento de clic a cada botón
socialButtons.forEach(button => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
        }
    });
});