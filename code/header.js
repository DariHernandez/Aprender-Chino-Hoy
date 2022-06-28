const open_button = document.querySelector ("header .btn.open")
const close_button = document.querySelector ("header .btn.close")
const nav = document.querySelector ("nav")

function show_collapse_nav () {
    nav.classList.toggle ("collapsed")
}

open_button.addEventListener ("click", () => show_collapse_nav())
close_button.addEventListener ("click", () => show_collapse_nav())