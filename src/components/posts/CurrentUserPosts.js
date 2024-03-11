import { useEffect, useState } from "react"
import { deletePost, getAllPosts } from "../../services/PostService"
import "./Posts.css"
import { Link } from "react-router-dom"



export const CurrentUserPosts = ({ currentUser }) => {

    const [currentUserPosts, setCurrentUserPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])

    const getAndSetPosts = () => {
        getAllPosts().then((postArray) => 
        setAllPosts(postArray))
    }

    useEffect(() => {
        getAndSetPosts()
    }, [])

    useEffect(() => {
        const foundPosts = allPosts.filter(post => post.userId === currentUser.id)
        setCurrentUserPosts(foundPosts)
    }, [allPosts, currentUser])       
    
    return (
        <div className="posts-container">
            <article className="posts">
                {currentUserPosts.map((postObject) => {
                    return (
                    <div>
                        <Link to={`/posts/${postObject.id}`}>
                        <p className="post">{postObject.title}</p>
                        </Link>
                    </div>
                    )
                })}
            </article>
        </div>
    )

}