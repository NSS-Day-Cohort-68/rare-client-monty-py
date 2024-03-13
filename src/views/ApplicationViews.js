import { Outlet, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/navbar/Navbar"
import { PostList } from "../components/posts/PostsList"
import { PostDetails } from "../components/posts/PostDetails"

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
    </Route>
    </Routes>
  )
}
