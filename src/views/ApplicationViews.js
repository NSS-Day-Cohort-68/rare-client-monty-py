import CategoryList from "../components/categories/CategoryList";
import CreateCategory from "../components/categories/CreateCategory";

import { Outlet, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { PostList } from "../components/posts/PostsList"
import { PostDetails } from "../components/posts/PostDetails"
import { CurrentUserPosts } from "../components/posts/CurrentUserPosts"
import CreateTag from "../components/tags/CreateTag";
import TagList from "../components/tags/TagList";

export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/"
      element={
        <>
          <Navbar />
          <Outlet />
        </>
      }
      >
        <Route path="posts">
          <Route index element={<PostList/>} />
          <Route path=":postId" element={<PostDetails/>}/>
        </Route>
        <Route path="categories" element={<CategoryList />} />
        <Route path="createCategory" element={<CreateCategory />} />
        {/* <Route path="createpost" element={<CreatePost/>} /> */}
        <Route path="myposts" element={<CurrentUserPosts/>} />
        <Route path="tags" element={<TagList/>}/>
        <Route path="createTag" element={<CreateTag/>} />
      </Route>
    </Routes>
  
  )
}