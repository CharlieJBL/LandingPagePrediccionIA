/**
 * Tienda Abarrotes - Landing Page
 * Funcionalidades: Carrusel, Dark Mode, Animaciones, Interacciones
 */

// ========== CARRUSEL AUTOMÁTICO ==========
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar carrusel
    initCarousel();
    
    // Inicializar dark mode
    initDarkMode();
    
    // Inicializar animaciones de scroll
    initScrollAnimations();
    
    // Inicializar contador de carrito (demo)
    initCartCounter();
    
    // Inicializar newsletter (demo)
    initNewsletter();
    
    // Inicializar búsqueda (demo)
    initSearch();
});

// ========== FUNCIÓN: CARRUSEL ==========
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Cambiar cada 5 segundos
    setInterval(nextSlide, 5000);
    
    // Opcional: pausar carrusel al hacer hover
    const carousel = document.querySelector('.carousel');
    let interval;
    
    carousel.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 5000);
    });
}

// ========== FUNCIÓN: DARK MODE ==========
function initDarkMode() {
    const toggleBtn = document.getElementById('themeToggle');
    if (!toggleBtn) return;
    
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        toggleBtn.textContent = '☀️';
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark');
        toggleBtn.textContent = '🌙';
    } else {
        // Detectar preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.body.classList.add('dark');
            toggleBtn.textContent = '☀️';
        }
    }
    
    // Evento click
    toggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            toggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark');
            toggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ========== FUNCIÓN: ANIMACIONES AL SCROLL ==========
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.benefit-card, .testimonial-card, .product-card, .ia-preview-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ========== FUNCIÓN: CONTADOR DEL CARRITO (DEMO) ==========
function initCartCounter() {
    const cartBtn = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');
    
    if (!cartBtn || !cartCount) return;
    
    let count = parseInt(cartCount.textContent) || 0;
    
    // Agregar a carrito desde tarjetas de producto
    const addButtons = document.querySelectorAll('.add-cart');
    addButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Obtener nombre del producto
            const card = btn.closest('.product-card');
            const productName = card?.querySelector('.product-title')?.textContent || 'Producto';
            
            // Incrementar contador
            count++;
            cartCount.textContent = count;
            
            // Animación de feedback
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
            
            // Mostrar notificación (opcional)
            showNotification(`🛒 ${productName} agregado al carrito`);
        });
    });
}

// ========== FUNCIÓN: NOTIFICACIONES ==========
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #84cc16;
        color: #0f172a;
        padding: 12px 20px;
        border-radius: 50px;
        font-weight: 600;
        z-index: 9999;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.3s ease;
        font-size: 0.9rem;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Agregar animaciones al documento
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== FUNCIÓN: NEWSLETTER ==========
function initNewsletter() {
    const newsletterBtn = document.querySelector('.newsletter-form button');
    const emailInput = document.querySelector('.newsletter-form input');
    
    if (!newsletterBtn || !emailInput) return;
    
    newsletterBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        
        if (!email) {
            showNotification('❌ Por favor ingresa un correo electrónico');
            emailInput.style.border = '2px solid #ef4444';
            setTimeout(() => {
                emailInput.style.border = 'none';
            }, 2000);
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('❌ Correo electrónico inválido');
            emailInput.style.border = '2px solid #ef4444';
            setTimeout(() => {
                emailInput.style.border = 'none';
            }, 2000);
            return;
        }
        
        showNotification('✅ ¡Suscripción exitosa! Recibirás nuestras ofertas');
        emailInput.value = '';
    });
    
    emailInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            newsletterBtn.click();
        }
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========== FUNCIÓN: BÚSQUEDA (DEMO) ==========
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (!searchInput || !searchBtn) return;
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            showNotification(`🔍 Buscando: "${query}"`);
            // Aquí se integraría la búsqueda real con PHP
        } else {
            showNotification('📝 Escribe algo para buscar');
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// ========== FUNCIÓN: NAVEGACIÓN SUAVE ==========
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (href === '#') {
            e.preventDefault();
        }
        // Para enlaces reales, no prevenimos el comportamiento
    });
});
// ========== MANEJAR IMÁGENES ROTAS ==========
function handleBrokenImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Si la imagen no carga, usar placeholder genérico pero acorde
            const productName = this.closest('.product-card')?.querySelector('.product-title')?.textContent || 'producto';
            const category = this.closest('.product-grid')?.previousElementSibling?.textContent || '';
            
            if (category.includes('Limpieza')) {
                this.src = 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop';
            } else if (category.includes('Ofertas') || category.includes('Vendidos')) {
                this.src = 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=300&h=300&fit=crop';
            } else {
                this.src = 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop';
            }
        });
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    handleBrokenImages();
});

// ========== EFECTO DE SCROLL EN NAVBAR ==========
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '0.5rem 2rem';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '0.8rem 2rem';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ========== LOGO CONSOLA ==========
console.log('🏪 Tienda Abarrotes | Predicción de Ventas con IA');
console.log('🤖 Sistema basado en Prophet (Meta) - Dashboard disponible');