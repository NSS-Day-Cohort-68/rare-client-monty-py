import { getAllPosts } from "../../services/PostService"
import { useState, useEffect } from "react"


export const PostList = () => {
const [allPosts, setAllPosts] = useState([])

useEffect(() => {
    getAllPosts().then((posts) => {
        setAllPosts(posts)
    })
}, [])


    return <><h1>All Posts List</h1></>
}