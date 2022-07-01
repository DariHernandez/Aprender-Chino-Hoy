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
    user: "@darideveloper",
    num_post: 8,
    num_followers: 23,
    num_following: 31,
    name: "francisco dari hernandez",
    details: "Desarrollador frontend, desarrollador wordpress y experto en web scraping.",
    web_page: "https://www.darideveloper.com/",
    profile: "https://www.instagram.com/darideveloper/",
    posts: [
        {
            image: "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-15/290190071_401005515311104_4786524893217113210_n.webp?stp=dst-jpg_e35_s320x320&cb=2d435ae8-4f3c5d8f&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=hmzh7w6rSM8AX_jXWMx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT90pu9dACroR_jdVy9RaHfyD01rXhKqmkOipw5oPcf8GQ&oe=62C59479&_nc_sid=8fd12b",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-15/290190071_401005515311104_4786524893217113210_n.webp?stp=dst-jpg_e35_s320x320&cb=2d435ae8-4f3c5d8f&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=hmzh7w6rSM8AX_jXWMx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT90pu9dACroR_jdVy9RaHfyD01rXhKqmkOipw5oPcf8GQ&oe=62C59479&_nc_sid=8fd12b",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-15/290190071_401005515311104_4786524893217113210_n.webp?stp=dst-jpg_e35_s320x320&cb=2d435ae8-4f3c5d8f&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=hmzh7w6rSM8AX_jXWMx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT90pu9dACroR_jdVy9RaHfyD01rXhKqmkOipw5oPcf8GQ&oe=62C59479&_nc_sid=8fd12b",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-15/290190071_401005515311104_4786524893217113210_n.webp?stp=dst-jpg_e35_s320x320&cb=2d435ae8-4f3c5d8f&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=hmzh7w6rSM8AX_jXWMx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT90pu9dACroR_jdVy9RaHfyD01rXhKqmkOipw5oPcf8GQ&oe=62C59479&_nc_sid=8fd12b",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-15/290190071_401005515311104_4786524893217113210_n.webp?stp=dst-jpg_e35_s320x320&cb=2d435ae8-4f3c5d8f&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=hmzh7w6rSM8AX_jXWMx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT90pu9dACroR_jdVy9RaHfyD01rXhKqmkOipw5oPcf8GQ&oe=62C59479&_nc_sid=8fd12b",
            url: "https://www.instagram.com/p/CfUkBDnpKuj/"
        },
        {
            image: "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-15/290190071_401005515311104_4786524893217113210_n.webp?stp=dst-jpg_e35_s320x320&cb=2d435ae8-4f3c5d8f&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=hmzh7w6rSM8AX_jXWMx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT90pu9dACroR_jdVy9RaHfyD01rXhKqmkOipw5oPcf8GQ&oe=62C59479&_nc_sid=8fd12b",
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

export async function get_social_posts () {
    sleep (1)
    return social_posts
}


