import { useEffect, useState } from "react"
import { getUserPosts } from "../services/PostService"
import { Link } from "react-router-dom"



export const CurrentUserPosts = ({ currentUser }) => {

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState(0)

    const getAndSetPosts = () => {
        getUserPosts(user).then((postArray) => 
        setPosts(postArray))
    }

    useEffect(() => {
        getAndSetPosts()
    }, [user])


    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem("rareClient-user"));
        if (userId) {
         setUser(userId.id);
        }
      }, []);
  

    return (
        <div className="posts-container">
            <div className="posts">
                {posts?.map((postObject) => {
                    return (
                    <div>
                        <Link to={`/posts/${postObject.id}`}>
                        <p className="post">Title:{postObject.title}Author:{postObject.first_name} {postObject.last_name}</p>
                        
                        </Link>
                    </div>
                    )
                })}
            </div>
        </div>
    )

}