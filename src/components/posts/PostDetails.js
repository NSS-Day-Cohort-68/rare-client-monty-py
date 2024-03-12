import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getPostById } from "../services/PostService";


export const PostDetails = () => {
    const { postId } = useParams({});
    const { post, setPost} = useState({});

useEffect(() => {
getPostById(postId).then((data) => {
const postObj = data[0];
setPost(postObj)
})
}, [postId])

return(
    <><div>Post Details</div></>
)
}