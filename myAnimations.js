    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
      // Function to handle scroll events
      function handleScroll() {
        const elements = document.querySelectorAll('.animation-item');

      elements.forEach(element => {
          if (isInViewport(element)) {
            if (!element.classList.contains('animated')) {
              element.classList.add('animated');
              if (element.classList.contains('fadeUp')) {
                element.classList.add('fadeUp-active');
              }
              if (element.classList.contains('fadeIn')) {
                element.classList.add('fadeIn-active');
              }
              if (element.classList.contains('slideLeft')) {
                element.classList.add('slideLeft-active');
              }
            }
          }
        });
      }
      
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
      
      // Initial check on page load
      document.addEventListener('DOMContentLoaded', handleScroll);