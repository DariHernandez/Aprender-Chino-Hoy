// Sample data
const sample_date = ["2022", "06", "24"]
const all_posts = [
    {
        id: 1,
        title: "Sample post 1",
        date: sample_date,
        image: "temp.jpg"
    },
    {
        id: 2,
        title: "Sample post 2",
        date: sample_date,
        image: "temp.jpg"
    },
    {
        id: 3,
        title: "Sample post 3",
        date: sample_date,
        image: "temp.jpg"
    },
    {
        id: 4,
        title: "Sample post 4",
        date: sample_date,
        image: "temp.jpg"
    },
    {
        id: 5,
        title: "Sample post 5",
        date: sample_date,
        image: "temp.jpg"
    }
]

const best_posts = [
    {
        id: 1,
        title: "Sample post 1",
        date: sample_date,
        image: "temp.jpg"
    },
    {
        id: 2,
        title: "Sample post 3",
        date: sample_date,
        image: "temp.jpg"
    },
    {
        id: 5,
        title: "Sample post 5",
        date: sample_date,
        image: "temp.jpg"
    }
]


const instagram = {
    profile_photo: "https://www.darideveloper.com/imgs/logo.png",
    profile_name: "darideveloper",
    name: "francisco dari hernandez",
    num_post: 8,
    num_followers: 23,
    num_following: 31,
    category: "Software",
    details: "Desarrollador frontend, desarrollador wordpress y experto en web scraping.",
    web_page_text: "www.darideveloper.com",
    web_page_link: "www.darideveloper.com",
    profile_url: "https://www.instagram.com/darideveloper/",
    posts: [
        {
            image: "https://i.imgur.com/hCla2Dz.png",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://i.imgur.com/hCla2Dz.png",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://i.imgur.com/hCla2Dz.png",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://i.imgur.com/hCla2Dz.png",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://i.imgur.com/hCla2Dz.png",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://i.imgur.com/hCla2Dz.png",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
    ],
}


function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

export async function get_posts () {
    sleep (1)
    return {
        "all-posts": all_posts,
        "best-posts": best_posts
    }
}

export async function get_instagram () {
    sleep (1)
    return instagram
}


