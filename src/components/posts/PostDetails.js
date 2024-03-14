import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getPostById } from "../../services/PostService";
import "./posts.css"


export const PostDetails = () => {
    const { postId } = useParams({});
    const [post, setPost] = useState({});

useEffect(() => {
getPostById(postId).then((data) => {
const postObj = data[0];
setPost(postObj);
})
}, [postId])

return (<section class="post-details-container">

    <div class="posts-section">
        <h1> {post.post_title} </h1>
       
    </div>
    <div class="posts-section">
        <span class="post-img">Post Image: </span>
        {post.post_image_url}
    </div>
    <div class="posts-section">
        <span> {post.post_content} </span>
        
    </div>
    <div class="posts-section">
        <span>Date: </span>
        {post.post_date}
    </div>
    <div class="posts-section">
        <span>By </span>
        {post.post_author?.author_first_name + " " + post.post_author?.author_last_name}
    </div>
    <div class="posts-section"><button>View Comments</button></div>

    </section>
)
}