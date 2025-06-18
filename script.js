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
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('mobile-menu-enter');
            });
            
            closeMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.add('mobile-menu-exit');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('mobile-menu-exit');
                    mobileMenu.classList.add('translate-x-full');
                }, 300);
            });
        });