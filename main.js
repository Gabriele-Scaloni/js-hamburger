const hamb= document.querySelector("i.fa-bars");

const menuVisible= document.querySelector("div.hamburger-menu");

hamb.addEventListener('click',

function() {
    menuVisible.style.display="block";
}
)