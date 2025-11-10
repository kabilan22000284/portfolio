document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  footer.addEventListener('click', () => {
    alert("Thanks for visiting Kabilan's portfolio!");
  });

  // Smooth scroll effect for internal links
  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
