window.onload = function() {
    set_post_banner ()
}

function set_post_banner () {
    let post_hero = document.querySelector (".hero.paralax")
    let image_name = post_hero.getAttribute ("image")
    let image_path = `url(../imgs/${image_name})`
    post_hero.style.backgroundImage = image_path
}
