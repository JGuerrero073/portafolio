document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav_list');
    const nav = document.querySelector('.nav');

    // Función para alternar la clase 'open' en el botón y 'open' en la lista
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        navList.classList.toggle('open');
    });

    // Cierra el menú cuando se hace clic en un enlace (útil para Single Page Applications)
    navList.querySelectorAll('.nav_link').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('open');
            navList.classList.remove('open');
        });
    });

    // Añadir/quitar la clase 'scrolled' al nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Puedes ajustar este valor
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});