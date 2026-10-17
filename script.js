document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú hamburguesa para dispositivos móviles
    const menuToggle = document.getElementById('menuToggle');
    const siteNav = document.getElementById('siteNav');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            siteNav.classList.toggle('active');
        });
    }

    // 2. Validación y prevención del envío por defecto en Contacto
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (nombre && correo && mensaje) {
                console.log('Formulario enviado con éxito:', { nombre, correo, mensaje });
                alert(`¡Gracias por tu mensaje, ${nombre}! Nos pondremos en contacto contigo pronto.`);
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }
});