function onScroll() {
    if (scrollY > 0) {
       navscroll.classList.add('scroll')
    } else {
        navscroll.classList.remove("scroll")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

