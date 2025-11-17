// Pricing Toggle
const pricingToggle = document.getElementById('pricingToggle');
const toggleLabels = document.querySelectorAll('.toggle-label');
const proPrice = document.getElementById('proPrice');
const priceNote = document.getElementById('priceNote');
const proPriceBtn = document.getElementById('proPriceBtn');

const prices = {
    monthly: {
        amount: '9,90',
        period: '/mês',
        note: 'R$ 104,90/ano no plano anual',
        btnText: 'Assinar PRO Mensal',
        btnUrl: 'https://buy.stripe.com/3cI14o5uF9KxarL6Xj9k40d'
    },
    annual: {
        amount: '104,90',
        period: '/ano',
        note: 'Economize R$ 14,90 vs mensal',
        btnText: 'Assinar PRO Anual',
        btnUrl: 'https://buy.stripe.com/aFa8wQ8GRcWJarLgxT9k40e'
    }
};

function updatePricing(period) {
    const priceData = prices[period];
    
    // Update price display
    proPrice.querySelector('.price-amount').textContent = priceData.amount;
    proPrice.querySelector('.price-period').textContent = priceData.period;
    priceNote.textContent = priceData.note;
    
    // Update button
    proPriceBtn.textContent = priceData.btnText;
    proPriceBtn.href = priceData.btnUrl;
    
    // Update toggle labels
    toggleLabels.forEach(label => {
        if (label.dataset.period === period) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
}

pricingToggle.addEventListener('change', (e) => {
    const period = e.target.checked ? 'annual' : 'monthly';
    updatePricing(period);
});

toggleLabels.forEach(label => {
    label.addEventListener('click', () => {
        const period = label.dataset.period;
        pricingToggle.checked = period === 'annual';
        updatePricing(period);
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed nav
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card, .step, .pricing-card, .testimonial, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Copy coupon code on click
document.querySelectorAll('.coupon-code').forEach(code => {
    code.style.cursor = 'pointer';
    code.title = 'Clique para copiar';
    
    code.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(code.textContent);
            const originalText = code.textContent;
            code.textContent = '✓ Copiado!';
            code.style.background = 'rgba(0, 208, 132, 0.3)';
            
            setTimeout(() => {
                code.textContent = originalText;
                code.style.background = 'rgba(255, 153, 0, 0.2)';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
});

// Chart bars animation
const chartBars = document.querySelectorAll('.chart-bar');
let chartAnimated = false;

const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !chartAnimated) {
            chartAnimated = true;
            chartBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.transform = 'scaleY(1)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.5 });

const chartContainer = document.querySelector('.preview-chart');
if (chartContainer) {
    chartBars.forEach(bar => {
        bar.style.transformOrigin = 'bottom';
        bar.style.transform = 'scaleY(0)';
        bar.style.transition = 'transform 0.4s ease-out';
    });
    chartObserver.observe(chartContainer);
}

// Notification animation loop
const notification = document.querySelector('.notification');
if (notification) {
    setInterval(() => {
        notification.style.animation = 'none';
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.5s ease';
        }, 10);
    }, 5000);
}

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(35, 47, 62, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'var(--secondary)';
        nav.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// Stats counter animation
const stats = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            stats.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('min')) {
                    animateNumber(stat, 0, 5, 1000, 'min');
                }
            });
        }
    });
}, { threshold: 0.5 });

const statsContainer = document.querySelector('.hero-stats');
if (statsContainer) {
    statsObserver.observe(statsContainer);
}

function animateNumber(element, start, end, duration, suffix = '') {
    let startTime = null;
    
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Mobile menu toggle (if needed in future)
function createMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none';
    
    if (window.innerWidth <= 768) {
        mobileMenuBtn.style.display = 'block';
    }
    
    // Add to nav in future if needed
}

// Page load animations
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Easter egg: Konami code for special discount message
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        showEasterEgg();
    }
});

function showEasterEgg() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        color: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 9999;
        text-align: center;
        animation: fadeInUp 0.5s ease-out;
    `;
    message.innerHTML = `
        <h3 style="margin-bottom: 1rem;">🎮 Você descobriu o segredo!</h3>
        <p style="margin-bottom: 1.5rem;">Parabéns, gamer! Use o cupom especial:</p>
        <code style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 1.5rem; font-weight: bold;">GAMER75</code>
        <p style="margin-top: 1.5rem; font-size: 0.875rem; opacity: 0.8;">75% OFF no primeiro mês 🚀</p>
        <button onclick="this.parentElement.remove()" style="margin-top: 1.5rem; padding: 0.5rem 1rem; background: white; color: var(--primary); border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 600;">Fechar</button>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 10000);
}

console.log('%c🚀 Amazon Associates Dashboard Pro', 'font-size: 20px; font-weight: bold; color: #FF9900;');
console.log('%cFeito com ❤️ para afiliados', 'font-size: 14px; color: #666;');
console.log('%c💡 Dica: Tente o código Konami para um desconto especial...', 'font-size: 12px; color: #999; font-style: italic;');
