import { Route, Routes } from "react-router-dom";
import CategoryList from "../components/categories/CategoryList";


export default function ApplicationViews() {
  return (
    <Routes>
      <Route path='categories' element={<CategoryList/>} />
    </Routes>
  )
}
