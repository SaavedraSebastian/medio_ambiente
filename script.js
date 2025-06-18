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
          document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('hidden');
  });

  document.getElementById('closeMenuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('hidden');
  });