        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#10b981',
                        secondary: '#047857',
                        dark: '#064e3b',
                        light: '#d1fae5'
                    },
                    fontFamily: {
                        'montserrat': ['Montserrat', 'sans-serif'],
                        'poppins': ['Poppins', 'sans-serif']
                    }
                }
            }
        }
        document.addEventListener('DOMContentLoaded', function () {
            const scrollToNextSection = document.querySelector('.scroll-to-next');
            scrollToNextSection.addEventListener('click', function () {
                const nextSection = document.querySelector('#seccion-siguiente');
                nextSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
         document.addEventListener('DOMContentLoaded', function() {
      const menuBtn = document.getElementById('menuBtn');
      const closeMenuBtn = document.getElementById('closeMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      
      menuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
      
      closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
      
      // Cerrar menú al hacer clic en un enlace
      const menuLinks = document.querySelectorAll('.menu-link');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    });