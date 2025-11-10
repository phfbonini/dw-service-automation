/* ==================== MENU MOBILE ==================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Abrir menu mobile
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Fechar menu mobile
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

/* ==================== HEADER AO SCROLL ==================== */
function scrollHeader() {
    const header = document.getElementById('header');
    // Quando o scroll é maior que 50 viewport height, adiciona classe
    if (window.scrollY >= 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
}
window.addEventListener('scroll', scrollHeader);

/* ==================== ACTIVE LINK NO SCROLL ==================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav__link[href*="' + sectionId + '"]');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (link) link.classList.add('active');
        } else {
            if (link) link.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* ==================== SCROLL TO TOP ==================== */
const scrollTop = document.getElementById('scroll-top');

function scrollToTopButton() {
    // Quando o scroll é maior que 400 viewport height, mostra o botão
    if (window.scrollY >= 400) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
}
window.addEventListener('scroll', scrollToTopButton);

// Ao clicar no botão, volta ao topo
if (scrollTop) {
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==================== ANIMAÇÕES AO SCROLL (AOS) ==================== */
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', animateOnScroll);

/* ==================== SMOOTH SCROLL PARA LINKS INTERNOS ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignora links que são apenas "#"
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // 80px de offset para o header
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== FORMULÁRIO DE CONTATO (Para páginas futuras) ==================== */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Pegar os valores do formulário
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            const whatsappNumber = '5544988215020';
            const serviceLabels = {
                manutencao: 'Manutenção e Calibração',
                instrumentacao: 'Instrumentação Industrial',
                integracao: 'Integração de Sistemas',
                guilhotina: 'Válvulas Guilhotina',
                outros: 'Outros'
            };

            const lines = [
                'Olá, equipe DW Service Automation!',
                `Meu nome é ${data.nome}.`,
                data.empresa ? `Empresa: ${data.empresa}` : null,
                `Telefone: ${data.telefone}`,
                `E-mail: ${data.email}`,
                `Serviço de interesse: ${serviceLabels[data.servico] || 'Não informado'}`,
                '',
                'Mensagem:',
                data.mensagem
            ].filter(Boolean);

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
            const whatsappWindow = window.open(whatsappURL, '_blank');

            if (whatsappWindow) {
                showMessage('Abrindo conversa no WhatsApp com sua mensagem.', 'success');
            } else {
                window.location.href = whatsappURL;
            }

            contactForm.reset();
        });
    }
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', initContactForm);

/* ==================== LAZY LOADING DE IMAGENS ==================== */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', lazyLoadImages);

/* ==================== CONTADOR ANIMADO ==================== */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Observar quando a seção de credibilidade aparecer
function initCounters() {
    const counters = document.querySelectorAll('.credibilidade__number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.textContent.includes('+')) {
                const target = parseInt(entry.target.textContent);
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

document.addEventListener('DOMContentLoaded', initCounters);

/* ==================== PREVENÇÃO DE SCROLL HORIZONTAL ==================== */
function preventHorizontalScroll() {
    let startX;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
        const diffX = Math.abs(e.touches[0].pageX - startX);
        const diffY = Math.abs(e.touches[0].pageY - e.touches[0].pageY);
        
        if (diffX > diffY) {
            e.preventDefault();
        }
    }, { passive: false });
}

preventHorizontalScroll();

/* ==================== PERFORMANCE: Debounce para eventos de scroll ==================== */
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce aos eventos de scroll
window.addEventListener('scroll', debounce(() => {
    scrollHeader();
    scrollActive();
    scrollToTopButton();
}, 10));

/* ==================== GALERIAS INTERATIVAS ==================== */
function initGallery(mainSelector, thumbSelector, config = {}) {
    const {
        activeClass = 'is-active',
        autoplay = false,
        interval = 5000
    } = config;

    const mainImage = document.querySelector(mainSelector);
    const thumbs = document.querySelectorAll(thumbSelector);

    if (!mainImage || !thumbs.length) return;

    const thumbsArr = Array.from(thumbs);
    let currentIndex = 0;
    let autoplayTimer;

    function setActiveThumb(targetThumb) {
        thumbs.forEach(thumb => thumb.classList.remove(activeClass));
        targetThumb.classList.add(activeClass);
    }

    function updateFromThumb(targetThumb) {
        const fullSrc = targetThumb.dataset.full;
        if (!fullSrc || mainImage.dataset.current === fullSrc) return;

        const applyImage = () => {
            mainImage.dataset.current = fullSrc;
            setActiveThumb(targetThumb);
            currentIndex = thumbsArr.indexOf(targetThumb);
            requestAnimationFrame(() => {
                mainImage.classList.remove('gallery-image--fading');
            });
        };

        const handleLoad = () => {
            applyImage();
        };

        mainImage.classList.add('gallery-image--fading');
        mainImage.addEventListener('load', handleLoad, { once: true });
        mainImage.src = fullSrc;

        if (mainImage.complete) {
            applyImage();
            mainImage.removeEventListener('load', handleLoad);
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % thumbsArr.length;
        updateFromThumb(thumbsArr[currentIndex]);
    }

    function resetAutoplay() {
        if (!autoplay) return;
        clearInterval(autoplayTimer);
        autoplayTimer = setInterval(nextSlide, interval);
    }

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            updateFromThumb(thumb);
            resetAutoplay();
        });

        thumb.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                thumb.click();
            }
        });

        if (!thumb.hasAttribute('tabindex')) {
            thumb.setAttribute('tabindex', '0');
        }

        thumb.addEventListener('pointerenter', () => {
            if (autoplay) {
                clearInterval(autoplayTimer);
            }
        });

        thumb.addEventListener('pointerleave', () => {
            resetAutoplay();
        });
    });

    mainImage.addEventListener('pointerenter', () => {
        if (autoplay) {
            clearInterval(autoplayTimer);
        }
    });

    mainImage.addEventListener('pointerleave', () => {
        resetAutoplay();
    });

    const initialThumb = thumbsArr.find(thumb => thumb.classList.contains(activeClass)) || thumbsArr[0];
    if (initialThumb) {
        updateFromThumb(initialThumb);
    }

    if (autoplay && thumbsArr.length > 1) {
        autoplayTimer = setInterval(nextSlide, interval);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initGallery('#hero-main-image', '.hero__thumb', { autoplay: true, interval: 3200 });
    initGallery('#servico-featured-main', '.servico__featured-thumb', { autoplay: true, interval: 4200 });
});

/* ==================== LOG DE INICIALIZAÇÃO ==================== */
console.log('%c DW Service Automation ', 'background: #1e40af; color: white; font-size: 16px; padding: 10px;');
console.log('%c Website carregado com sucesso! ', 'color: #10b981; font-size: 14px;');


