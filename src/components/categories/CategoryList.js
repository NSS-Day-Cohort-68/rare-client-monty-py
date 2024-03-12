import { useNavigate } from "react-router-dom"


export default function CategoryList() {
    const navigate = useNavigate()
  return (
    <div className="categoryList-main-container">
        <div className="create-category-btn-container">
            <button onClick={navigate('./createCategory')}>Create Category</button>
        </div>
    </div>
  )
}
