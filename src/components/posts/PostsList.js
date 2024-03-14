import { getAllPosts } from "../../services/PostService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((posts) => {
      setAllPosts(posts);
    });
  }, []);

  return (
    <div>
      <h1>All Posts List</h1>
      {allPosts.map((post) => {
        if (post.approved === 1) {
            return (
              <Link to={`/posts/${post.id}`} key={post.id}>
                <p className="post">
                  Title: {post.title} Author: {post.user.first_name}{" "}
                  {post.user.last_name} Category: {post.category.label}
                </p>
              </Link>
            );
          }
      })}
    </div>
  );
};
