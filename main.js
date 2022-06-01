window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navscroll.classList.add('scroll')
    } else {
        navscroll.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show')
     } else {
        backToTopButton.classList.remove('show')
     }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .BoxesContainer,
  #services,
  #services header,
  #services .card,
  #abou,
  #about header,
  #about .content`);

