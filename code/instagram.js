import { get_instagram } from "./data.js"

const instagram_wrapper = document.querySelector (".instagram")

window.onload = async function () {

    // Get data from api
    const instagram_data = await get_instagram ()

    // Update content
    const profile = instagram_wrapper.querySelector (".profile")
    const profile_img = profile.querySelector (".profile-img")
    const profile_follow = profile.querySelector (".btn.follow")
    const profile_name = profile.querySelector (".profile-name")
    const num_posts = profile.querySelector (".num-posts")
    const num_followers = profile.querySelector (".num-followers")
    const num_following = profile.querySelector (".num-following")
    const name = profile.querySelector (".name")
    const category = profile.querySelector (".category")
    const details = profile.querySelector (".details")
    const web_page = profile.querySelector (".web-page") 

    profile_img.setAttribute ("src", instagram_data["profile_photo"])
    profile_name.innerHTML = instagram_data["profile_name"]
    profile_follow.setAttribute ("href", instagram_data["profile_url"])
    num_posts.innerHTML = instagram_data["num_post"]
    num_followers.innerHTML = instagram_data["num_followers"]
    num_following.innerHTML = instagram_data["num_following"]
    name.innerHTML = instagram_data["name"]
    category.innerHTML = instagram_data["category"]
    details.innerHTML = instagram_data["details"]
    web_page.innerHTML = instagram_data["web_page_text"]
    web_page.setAttribute ("href", instagram_data["web_page_link"])

    // Update posts
    let post_section = instagram_wrapper.querySelector (".posts")

    post_section.innerHTML = ""

    for (const post_data of instagram_data["posts"]) {
        const post_image = post_data["image"]
        const post_url = post_data["url"]
        
        // Create post
        const post = `<article post-link="${post_url}">
                        <img src="${post_image}" alt="post image">
                    </article>`
        
        post_section.innerHTML += post         
    }

    open_posts ()
}

function open_posts () {
    // Add event listener for open posts in new tabs
    let posts = document.querySelectorAll ("section.posts article")
    for (const post of posts) {
        post.addEventListener ("click", function (event) {
            let link = this.getAttribute ("post-link")
            window.open(link, '_blank')
        })
    }
}