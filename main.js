const hamb= document.querySelector("i.fa-bars");

const menuVisible= document.querySelector("div.hamburger-menu");

const cross= document.querySelector("i.fa-times");

hamb.addEventListener('click',

function () {
    menuVisible.style.display="block";
}
)

cross.addEventListener('click',

function () {
    menuVisible.style.display="none";
}
)