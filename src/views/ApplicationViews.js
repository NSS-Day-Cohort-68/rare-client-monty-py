import { Route, Routes } from "react-router-dom";
import CategoryList from "../components/categories/CategoryList";
import CreateCategory from "../components/categories/CreateCategory";


export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="categories" element={<CategoryList />} />
      <Route path="createCategory" element={<CreateCategory />} />
    </Routes>
  )
}
