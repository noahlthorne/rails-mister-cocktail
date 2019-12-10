const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-brand');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 770) {
        navbar.classList.add('nav-link-black');
        console.log("class black added")
      } else {
        navbar.classList.remove('nav-link-black');
        console.log("class black removed")

      }
    });
  }
}

export { initUpdateNavbarOnScroll };
