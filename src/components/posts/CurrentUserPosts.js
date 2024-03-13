import { useEffect, useState } from "react"
import { getUserPosts } from "../services/PostService"
import { Link } from "react-router-dom"



export const CurrentUserPosts = ({ currentUser }) => {

    const [currentUserPosts, setCurrentUserPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])

    const getAndSetPosts = () => {
        getUserPosts().then((postArray) => 
        setAllPosts(postArray))
    }

    useEffect(() => {
        getAndSetPosts()
    }, [])

    return (
        <div className="posts-container">
            <div className="posts">
                {currentUserPosts.map((postObject) => {
                    return (
                    <div>
                        <Link to={`/posts/${postObject.id}`}>
                        <p className="post">{postObject.title}</p>
                        </Link>
                    </div>
                    )
                })}
            </div>
        </div>
    )

}