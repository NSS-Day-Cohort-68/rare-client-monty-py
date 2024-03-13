import { useState } from "react"
import { createNewCategory } from "../../services/CategoryService"
import { useNavigate } from "react-router-dom"


export default function CreateCategory() {
  const navigate = useNavigate()
  const [category, setCategory] = useState("")

  const handleSave = (e) => {
    e.preventDefault()
    const categoryObj = {
      "label": category
    }
    createNewCategory(categoryObj).then(
      ()=>{navigate("/categories")}
    )}


  return (
    <div className="createCategory-main">
      <form className="createCategory-form" onSubmit={handleSave}>
        <h1>Creat a New Category</h1>
        <fieldset>
          <input 
            type="text"
            placeholder="category"
            required
            value={category}
            onChange={(e)=>{setCategory(e.target.value)}}
          />
        </fieldset>
        <div className="createCategory-btn-container">
          <button className="createCategory-btn" type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}
