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


const social_posts = {
    twitter: {
        user: "Elon Musk",
        posts: [
            {
                date: "May 24",
                text: "USA birth rate has been below min sustainable levels for ~50 years",
                image: "https://pbs.twimg.com/media/FThyOWhXEAcmsOQ?format=jpg&name=small"
            },
            {
                date: "Jun 21",
                text: "",
                image: "https://pbs.twimg.com/media/FVya25WXwAELWph?format=jpg&name=small"
            },
            {
                date: "Jun 20",
                text: "AI gets better every day",
                image: "https://pbs.twimg.com/media/FVu8wOZX0AAIjoU?format=jpg&name=small"
            },
        ]
    },
    instagram: {
        user: "Elon Musk",
        posts: [
            "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-15/289062173_715224103085518_3205870126268784436_n.jpg?stp=dst-jpg_e15_p480x480&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=pB4_Op-I9X8AX8YkRbS&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NDY4MzE3Mjg4MTMyODc2Mg%3D%3D.2-ccb7-5&oh=00_AT-CUZ1HjWKPzu22pF76xU_7MhzR65KBGjSbq04WOyB3Yw&oe=62BD9A13&_nc_sid=30a2ef",
            "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-15/289295078_750606122791973_3193182784883419175_n.jpg?stp=dst-jpg_e15_p480x480&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=R1FuRCFNPMoAX_dyzFL&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkyNzgwMDEzODI2OTA1NA%3D%3D.2-ccb7-5&oh=00_AT9FrTIQAnDw0ebhdp2zPJ9Gve6MFjM9pnb6LBQuYgQH_A&oe=62BDBD5F&_nc_sid=30a2ef",
            "https://instagram.fagu3-1.fna.fbcdn.net/v/t51.2885-15/288759269_180243121095823_8544134261946067407_n.jpg?stp=dst-jpg_e15_p480x480&_nc_ht=instagram.fagu3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_p2jSZEqXUsAX9sAdVW&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NDQwNzAxOTk4OTk2MTE1MA%3D%3D.2-ccb7-5&oh=00_AT_8GC-YYCEF7kkxdVs_Idz_eh8UzLhJfM38tmE-nA96yg&oe=62BDA501&_nc_sid=30a2ef"
        ]
    },

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


