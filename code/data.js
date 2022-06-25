function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

const sample_data = new Date(2022, 6, 24)
const all_posts = [
    {
        id: 1,
        title: "Sample post 1",
        date: sample_data,
        image: "temp.jpg"
    },
    {
        id: 2,
        title: "Sample post 2",
        date: sample_data,
        image: "temp.jpg"
    },
    {
        id: 3,
        title: "Sample post 3",
        date: sample_data,
        image: "temp.jpg"
    },
    {
        id: 4,
        title: "Sample post 4",
        date: sample_data,
        image: "temp.jpg"
    },
    {
        id: 5,
        title: "Sample post 5",
        date: sample_data,
        image: "temp.jpg"
    },
    {
        id: 6,
        title: "Sample post 6",
        date: sample_data,
        image: "temp.jpg"
    }
]

const best_posts = [
    {
        id: 1,
        title: "Sample post 1",
        date: sample_data,
        image: "temp.jpg"
    },
    {
        id: 2,
        title: "Sample post 2",
        date: sample_data,
        image: "temp.jpg"
    }
]

export async function get_posts () {
    sleep (1)
    return {
        all_posts: all_posts,
        best_posts: best_posts
    }
}