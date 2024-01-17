// javascript  responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation  = document.querySelector(".navigation")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 50 ) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});






























































