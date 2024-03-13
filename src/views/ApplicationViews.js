import { Navbar } from "../components/navbar/Navbar"
import { Route, Routes, Outlet } from "react-router-dom"
import { CurrentUserPosts } from "../components/posts/CurrentUserPosts"

export default function ApplicationViews() {
  return (
    <Routes> 
            <Route
            path="/"
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
            >
            {/* <Route path="createpost" element={<CreatePost/>} /> */}
            <Route path="myposts" element={<CurrentUserPosts/>} />
            </Route>
    </Routes>
  
  )
}