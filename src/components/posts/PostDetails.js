import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getPostById } from "../services/PostService";


export const PostDetails = () => {
    const { postId } = useParams({});
    const [post, setPost] = useState({});

useEffect(() => {
getPostById(postId).then((data) => {
const postObj = data[0];
setPost(postObj);
})
}, [postId])

return (<section>
    <div>
    <h1>Post Details</h1>
    </div>
    <div>
        <span>Post Title: </span>
        {post.post_title}
    </div>
    <div>
        <span>Post Image: </span>
        {post.post_image_url}
    </div>
    <div>
        <span>Content: </span>
        {post.post_content}
    </div>
    <div>
        <span>Date: </span>
        {post.post_date}
    </div>
    {/* <div>
        <span>Author: </span>
        {post.post_author.author_first_name}
    </div> */}

    </section>
)
}