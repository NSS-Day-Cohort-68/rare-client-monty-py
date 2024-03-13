export const getUserPosts = (id) => {
    return fetch(`http://localhost:8088/posts?user_id=${id}`).then((response) =>
        response.json())
}
