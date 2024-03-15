export const getUserPosts = (id) => {
    return fetch(`http://localhost:8088/posts?user_id=${id}`).then((response) =>
        response.json())
}

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts?post_id=${id}`).then((response) => response.json())
}

export const getAllPosts = () => {
    return fetch(`http://localhost:8088/posts`).then((res) => res.json())
}