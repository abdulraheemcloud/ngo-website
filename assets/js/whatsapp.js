document.addEventListener('DOMContentLoaded', () => {
    const whatsappConfig = {
        phone: '919876543210',
        message: 'Hello HopeReach Foundation, I would like to know more about your programs.'
    };

    const createWhatsAppButton = () => {
        const btn = document.createElement('a');
        btn.href = `https://wa.me/${whatsappConfig.phone}?text=${encodeURIComponent(whatsappConfig.message)}`;
        btn.className = 'whatsapp-float';
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        btn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        btn.setAttribute('aria-label', 'Chat on WhatsApp');
        
        // Tracking
        btn.addEventListener('click', () => {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'WhatsApp',
                    'event_label': 'Floating Button'
                });
            }
        });

        document.body.appendChild(btn);

        // Add CSS for the button dynamically if not in CSS file
        const style = document.createElement('style');
        style.textContent = `
            .whatsapp-float {
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 40px;
                right: 40px;
                background-color: #25d366;
                color: #FFF;
                border-radius: 50px;
                text-align: center;
                font-size: 30px;
                box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }
            .whatsapp-float:hover {
                transform: scale(1.1);
                background-color: #128c7e;
            }
            @media (max-width: 768px) {
                .whatsapp-float {
                    width: 50px;
                    height: 50px;
                    bottom: 20px;
                    right: 20px;
                    font-size: 25px;
                }
            }
        `;
        document.head.appendChild(style);
    };

    createWhatsAppButton();
});
