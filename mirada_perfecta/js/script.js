

     // Menú mobile - Versión corregida
        document.addEventListener('DOMContentLoaded', function() {
            const menuBtn = document.getElementById('menu-btn');
            const navbarMenu = document.getElementById('navbar-menu');
            
            // Función para alternar el menú
            function toggleMenu() {
                navbarMenu.classList.toggle('active');
                // Cambiar ícono (opcional)
                if (navbarMenu.classList.contains('active')) {
                    menuBtn.innerHTML = `
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    `;
                } else {
                    menuBtn.innerHTML = `
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    `;
                }
            }
            
            // Event listeners
            menuBtn.addEventListener('click', toggleMenu);
            
            // Cerrar menú al hacer clic en un enlace (mobile)
            const navLinks = document.querySelectorAll('#navbar-menu a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 768) { // Solo para mobile
                        toggleMenu();
                    }
                });
            });
            
            // Smooth scrolling para todos los enlaces
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                });
            });
            
            // Cambiar navbar al hacer scroll
            window.addEventListener('scroll', () => {
                const nav = document.querySelector('nav');
                if (window.scrollY > 20) {
                    nav.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
                } else {
                    nav.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-sm');
                }
            });
   });

                document.addEventListener('DOMContentLoaded', function() {
    const catalogoBtn = document.getElementById('catalogo');
    const cardsContainer = document.getElementById('cards-container');


    const additionalCards = [
        // Clásicas
        `


            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                <div class="w-full overflow-hidden flex-shrink-0">
                    <img src="img/volumen tech hawaiano_(6).png" 
                        alt="Extensiones de pestañas" 
                        class="w-full h-full object-cover object-center">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-bold text-white mb-2">Lifting</h3>
                    
                    <div class="mb-4">
                        <p class="text-amber-400 font-bold">$29.990</p>
                    </div>
                    
                    <div class="border-t border-gray-700 pt-3 mb-4">
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Horario:</span> 10:00 - 5pm
                        </p>
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Reserva:</span> $5.000
                        </p>
                    </div>
                    
                    <a href="https://wa.link/6hbt9d" target="_blank" class="w-full">
                        <button class="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300 mt-auto">
                            Reservar ahora
                        </button>
                    </a>
                    
                    <p class="text-xs text-gray-500 mt-3">
                        Atencion solo con cita 
                    </p>
                </div>
            </div>

            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                <div class="w-full overflow-hidden flex-shrink-0">
                    <img src="img/volumen tech hawaiano_(5).png" 
                        alt="Extensiones de pestañas clásicas" 
                        class="w-full h-full object-cover object-center">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-bold text-white mb-2">Extensiones Clásicas</h3>
                    
                    <div class="mb-4">
                        <p class="text-amber-400 font-bold">$29.990</p>
                    </div>
                    
                    <div class="border-t border-gray-700 pt-3 mb-4">
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Horario:</span> 10:00 - 5pm
                        </p>
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Reserva:</span> $5.000
                        </p>
                    </div>
                    
                    <a href="https://wa.link/6hbt9d" target="_blank" class="w-full">
                        <button class="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300 mt-auto">
                            Reservar ahora
                        </button>
                    </a>
                    
                    <p class="text-xs text-gray-500 mt-3">
                        Atencion solo con cita 
                    </p>
                </div>
            </div>

            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                <div class="w-full overflow-hidden flex-shrink-0">
                    <img src="img/volumen tech hawaiano_(4).png" 
                        alt="Efecto rímel" 
                        class="w-full h-full object-cover object-center">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-bold text-white mb-2">Efecto Rímel</h3>
                    
                    <div class="mb-4">
                        <p class="text-amber-400 font-bold">$35.000</p>
                    </div>
                    
                    <div class="border-t border-gray-700 pt-3 mb-4">
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Horario:</span> 10:00 - 5pm
                        </p>
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Reserva:</span> $5.000
                        </p>
                    </div>
                    
                    <a href="https://wa.link/6hbt9d" target="_blank" class="w-full">
                        <button class="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300 mt-auto">
                            Reservar ahora
                        </button>
                    </a>
                    
                    <p class="text-xs text-gray-500 mt-3">
                        Atencion solo con cita 
                    </p>
                </div>
            </div>

            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                <div class="w-full overflow-hidden flex-shrink-0">
                    <img src="img/volumen tech hawaiano_(1).png" 
                        alt="Volumen Hawaiano" 
                        class="w-full h-full object-cover object-center">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-bold text-white mb-2">Volumen Hawaiano</h3>
                    
                    <div class="mb-4">
                        <p class="text-amber-400 font-bold">$35.000</p>
                    </div>
                    
                    <div class="border-t border-gray-700 pt-3 mb-4">
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Horario:</span> 10:00 - 5pm
                        </p>
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Reserva:</span> $5.000
                        </p>
                    </div>
                    
                    <a href="https://wa.link/6hbt9d" target="_blank" class="w-full">
                        <button class="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300 mt-auto">
                            Reservar ahora
                        </button>
                    </a>
                    
                    <p class="text-xs text-gray-500 mt-3">
                        Atencion solo con cita 
                    </p>
                </div>
            </div>

            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                <div class="w-full overflow-hidden flex-shrink-0">
                    <img src="img/volumen tech hawaiano_(2).png" 
                        alt="Volumen Brasileiro" 
                        class="w-full h-full object-cover object-center">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-bold text-white mb-2">Volumen Brasileiro</h3>
                    
                    <div class="mb-4">
                        <p class="text-amber-400 font-bold">$35.000</p>
                    </div>
                    
                    <div class="border-t border-gray-700 pt-3 mb-4">
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Horario:</span> 10:00 - 5pm
                        </p>
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Reserva:</span> $5.000
                        </p>
                    </div>
                    
                    <a href="https://wa.link/6hbt9d" target="_blank" class="w-full">
                        <button class="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300 mt-auto">
                            Reservar ahora
                        </button>
                    </a>
                    
                    <p class="text-xs text-gray-500 mt-3">
                        Atencion solo con cita 
                    </p>
                </div>
            </div>

            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                <div class="w-full overflow-hidden flex-shrink-0">
                    <img src="img/volumen tech hawaiano_(3).png" 
                        alt="Volumen Egipcio" 
                        class="w-full h-full object-cover object-center">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-bold text-white mb-2">Volumen Egipcio</h3>
                    
                    <div class="mb-4">
                        <p class="text-amber-400 font-bold">$40.000</p>
                    </div>
                    
                    <div class="border-t border-gray-700 pt-3 mb-4">
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Horario:</span> 10:00 - 5pm
                        </p>
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Reserva:</span> $5.000
                        </p>
                    </div>
                    
                    <a href="https://wa.link/6hbt9d" target="_blank" class="w-full">
                        <button class="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300 mt-auto">
                            Reservar ahora
                        </button>
                    </a>
                    
                    <p class="text-xs text-gray-500 mt-3">
                        Atencion solo con cita 
                    </p>
                </div>
            </div>

            <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
                <div class="w-full overflow-hidden flex-shrink-0">
                    <img src="img/volumen tech hawaiano_(7).png" 
                        alt="Angel Set" 
                        class="w-full h-full object-cover object-center">
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-xl font-bold text-white mb-2">Angel Set</h3>
                    
                    <div class="mb-4">
                        <p class="text-amber-400 font-bold">$45.000</p>
                    </div>
                    
                    <div class="border-t border-gray-700 pt-3 mb-4">
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Horario:</span> 10:00 - 5pm
                        </p>
                        <p class="text-gray-300 text-sm">
                            <span class="font-semibold text-white">Reserva:</span> $5.000
                        </p>
                    </div>
                    
                    <a href="https://wa.link/6hbt9d" target="_blank" class="w-full">
                        <button class="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300 mt-auto">
                            Reservar ahora
                        </button>
                    </a>
                    
                    <p class="text-xs text-gray-500 mt-3">
                        Atencion solo con cita 
                    </p>
                </div>
            </div>

<!-- Kitty Eyes -->
<div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
    <div class="w-full overflow-hidden flex-shrink-0">
        <img src="img/volumen tech hawaiano_(8).png" 
             alt="Kitty Eyes" 
             class="w-full h-full object-cover object-center">
    </div>
    <div class="p-6 flex-grow flex flex-col">
        <h3 class="text-xl font-bold text-white mb-2">Kitty Eyes</h3>
        
        <div class="mb-4">
            <p class="text-amber-400 font-bold">$45.000</p>
        </div>
        
        <div class="border-t border-gray-700 pt-3 mb-4">
            <p class="text-gray-300 text-sm">
                <span class="font-semibold text-white">Horario:</span> 10:00 - 5pm
            </p>
            <p class="text-gray-300 text-sm">
                <span class="font-semibold text-white">Reserva:</span> $5.000
            </p>
        </div>
        
        <button class="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded transition-colors duration-300 mt-auto">
            Reservar ahora
        </button>
        
        <p class="text-xs text-gray-500 mt-3">
            Atencion solo con cita 
        </p>
    </div>
</div>
        
    </div>`
    ];

  catalogoBtn.addEventListener('click', function() {
        // Agregar tarjetas adicionales
        additionalCards.forEach(cardHTML => {
            cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });

        // Ocultar el botón
        this.style.display = 'none';

        // Animación para las nuevas tarjetas
        const allCards = cardsContainer.querySelectorAll('.bg-gray-800');
        allCards.forEach((card, index) => {
            if (index >= 3) { // Solo animar las nuevas
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * (index - 3));
            }
        });
    });
});

