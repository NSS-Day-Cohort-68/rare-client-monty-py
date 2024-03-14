import { useState } from "react"
import { createNewTag } from "../../services/TagService"
import { useNavigate } from "react-router-dom"


export default function CreateTag() {
  const navigate = useNavigate()
  const [tag, setTag] = useState("")

  const handleSave = (e) => {
    e.preventDefault()
    const tagObj = {
      "label": tag
    }
    createNewTag(tagObj).then(
      ()=>{navigate("/tags")}
    )}


  return (
    <div className="createTag-main">
      <form className="createTag-form" onSubmit={handleSave}>
        <h1>Create a New Tag</h1>
        <fieldset>
          <input 
            type="text"
            placeholder="Tag"
            required
            value={tag}
            onChange={(e)=>{setTag(e.target.value)}}
          />
        </fieldset>
        <div className="createTag-btn-container">
          <button className="createTag-btn" type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}
