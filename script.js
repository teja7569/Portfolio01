// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// AOS (scroll animations)
AOS.init({
  duration: 1000,
  once: true
});

// Typed.js effect
new Typed(".typed-text", {
  strings: ["Computer Science Graduate", "Developer", "Problem Solver"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});
