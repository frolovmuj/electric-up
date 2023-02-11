if (innerWidth >= 768) {
  AOS.init();
} else {
  const scripts = document.querySelectorAll('script');
  scripts.forEach((script) => {
    script.src == 'https://unpkg.com/aos@2.3.1/dist/aos.js'
      ? script.remove()
      : null;
  });
  const links = document.querySelectorAll('link');
  links.forEach((link) => {
    link.href == 'https://unpkg.com/aos@2.3.1/dist/aos.css'
      ? link.remove()
      : null;
  });
}
