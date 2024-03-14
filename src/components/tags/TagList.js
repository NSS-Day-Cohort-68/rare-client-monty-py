import { useNavigate } from "react-router-dom"


export default function TagList() {
    const navigate = useNavigate()
  return (
    <div className="tagList-main-container">
        <div className="create-tag-btn-container">
            <button onClick={()=> {navigate('/createTag')}}>Create Tag</button>
        </div>
    </div>
  )
}
