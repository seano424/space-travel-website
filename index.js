// when the user clicks the hamburger menu, toggle a class on the body to make the menu open

const mobileMenu = document.querySelector('.mobile-menu')
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle-btn')
mobileNavToggleBtn.addEventListener('click', () => {
  // if the aria-expanded attribute is set to true, set it to false, and vice versa
  const expanded = mobileNavToggleBtn.getAttribute('aria-expanded')
  if (expanded === 'true') {
    mobileNavToggleBtn.setAttribute('aria-expanded', 'false')
    mobileMenu.setAttribute('data-visible', 'false')
  } else {
    mobileNavToggleBtn.setAttribute('aria-expanded', 'true')
    mobileMenu.setAttribute('data-visible', 'true')
  }
})
