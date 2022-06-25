import { get_posts } from "./data.js"

window.onload = function() {
    show_posts ()
}

async function show_posts () {

    // Get posts from api
    let posts = await get_posts()

    // 
}