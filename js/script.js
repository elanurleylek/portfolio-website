// Get all links with a hash
const links = document.querySelectorAll('a[href*="#"]');

// Add an event listener to each link
links.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the target section
    const target = document.querySelector(link.getAttribute('href'));

    // Check if the target is the İletişim page
    if (target.id === 'iletisim') {
      // Scroll to the top of the İletişim page
      target.scrollIntoView({
        behavior: 'mooth'
      });

      // Focus on the first input field in the form
      const form = target.querySelector('form');
      const firstInput = form.querySelector('input');
      firstInput.focus();
    } else {
      // Scroll to the target section
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});