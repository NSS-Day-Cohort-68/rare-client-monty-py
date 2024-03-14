import CategoryList from "../components/categories/CategoryList";
import CreateCategory from "../components/categories/CreateCategory";

import { Outlet, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { CurrentUserPosts } from "../components/posts/CurrentUserPosts"

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
        <Route path="categories" element={<CategoryList />} />
        <Route path="createCategory" element={<CreateCategory />} />
        {/* <Route path="createpost" element={<CreatePost/>} /> */}
        <Route path="myposts" element={<CurrentUserPosts/>} />
      </Route>
    </Routes>
  
  )
}