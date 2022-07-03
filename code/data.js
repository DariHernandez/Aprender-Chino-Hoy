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


// const instagram = {
//     profile_photo: "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-19/272281480_643776326936289_5502227003927626832_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=B8RZp8B6kVEAX_vOdLs&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT_soWsVWki84axJSzOR-rfsMpkSFFmw9tmtPmHm5t51SA&oe=62C7A15D&_nc_sid=8fd12b",
//     profile_name: "darideveloper",
//     name: "francisco dari hernandez",
//     num_post: 8,
//     num_followers: 23,
//     num_following: 31,
//     category: "Software",
//     details: "Desarrollador frontend, desarrollador wordpress y experto en web scraping.",
//     web_page_text: "www.darideveloper.com",
//     web_page_link: "www.darideveloper.com",
//     profile_url: "https://www.instagram.com/darideveloper/",
//     posts: [
//         {
//             image: "https://i.imgur.com/hCla2Dz.png",
//             url: "https://www.instagram.com/p/CfUkBDnpKuj/"
//         },
//         {
//             image: "https://i.imgur.com/hCla2Dz.png",
//             url: "https://www.instagram.com/p/CfUkBDnpKuj/"
//         },
//         {
//             image: "https://i.imgur.com/hCla2Dz.png",
//             url: "https://www.instagram.com/p/CfUkBDnpKuj/"
//         },
//         {
//             image: "https://i.imgur.com/hCla2Dz.png",
//             url: "https://www.instagram.com/p/CfUkBDnpKuj/"
//         },
//         {
//             image: "https://i.imgur.com/hCla2Dz.png",
//             url: "https://www.instagram.com/p/CfUkBDnpKuj/"
//         },
//         {
//             image: "https://i.imgur.com/hCla2Dz.png",
//             url: "https://www.instagram.com/p/CfUkBDnpKuj/"
//         },
//     ],
// }


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
    return fetch ("https://raw.githubusercontent.com/DariHernandez/instagram-last-posts-github-api/master/data.json")
    .then (reponse => reponse.json())
    .then (json_data => json_data["darideveloper"])
}


