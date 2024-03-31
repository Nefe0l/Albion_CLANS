let Burger = document.querySelector(".Header__List_BurgerMenu")
let Links = document.querySelector(".Header__List_Links")
let Body = document.body

Burger.addEventListener("click", ()=> {
    Burger.classList.toggle("NewClass")
    Links.classList.toggle("NewLinks")
    Body.classList.toggle("NoScroll")
})

