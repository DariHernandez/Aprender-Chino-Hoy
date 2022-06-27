import { get_posts } from "./data.js"

window.onload = function() {
    show_posts ()
}

async function show_posts () {

    // Get posts from api
    let posts = await get_posts()

    // Show posts data
    const posts_lists = ["all-posts", "best-posts"]
    for (const posts_list of posts_lists) {
        for (const [index, post_data] of posts[posts_list].entries() ) {
    
            // Get post elements
            const current_post = document.querySelector (`.${posts_list} section article:nth-child(${index+1})`)
            let current_post_title = current_post.querySelector ("h3")
            let current_post_img = current_post.querySelector ("img")
            let current_post_date = current_post.querySelector ("time")
    
            // Update posts data
            current_post_title.innerHTML = post_data["title"]
            current_post_img.setAttribute ("src", `../imgs/${post_data["image"]}` )
            current_post_date.innerHTML = String(post_data["date"].join("/"))
            current_post_date.setAttribute("datetime", post_data["date"].join("/"))
        }
    }
}