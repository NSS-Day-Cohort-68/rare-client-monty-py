import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllCategories } from "../../services/CategoryService"
import "./categories.css"


export default function CategoryList() {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    
    const getSetCategories = () => {
      getAllCategories().then(
        (res) => {setCategories(res)
      })
    }
    
    useEffect(()=>{
      getSetCategories()
    },[])

  return (
    <div className="categoryList-main-container">
        <div className="categories-list-container">
          {categories.map((x)=>{
            return (
              <div className="category-item">
                <Link>{x.label}</Link>
              </div>
            )
          })}
        </div>
        <div className="create-category-btn-container">
            <button className="create-category-btn" onClick={()=> {navigate('/createCategory')}}>Create Category</button>
        </div>
    </div>
  )
}
