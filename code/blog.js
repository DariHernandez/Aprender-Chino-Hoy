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
        // Ge6t posts wrapper
        const posts_wrapper = document.querySelector (`.${posts_list} section`)

        for (const [index, post_data] of posts[posts_list].entries() ) {

            // Create post
            let post = `
            <article>
                <a href="./${post_data["title"].toLowerCase().replace(" ", "-")}.html">
                    <img src="../imgs/${post_data["image"]}" alt="blog ${post_data["title"]} preview image">
                    <h3>${post_data["title"]}</h3>
                    <p class="datetime">
                        <i class="icon-clock2"></i>
                        <time datetime="${post_data["date"].join("-")}">${post_data["date"].join("/")}</time>
                    </p>
                </a>
            </article>`
            posts_wrapper.innerHTML += post

        }
    }
}