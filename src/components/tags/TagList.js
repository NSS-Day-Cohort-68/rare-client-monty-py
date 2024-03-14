import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllTags } from "../../services/TagService"


export default function TagList() {
    const navigate = useNavigate()
    const [tags, setTags] = useState([])

    useEffect(() => {
        getAllTags().then((data) => { setTags(data) })
    }, [])

    return (
        <div>
            <div className="posts-container">
                <div className="posts">
                    {tags?.map((tagObject) => {
                        return (
                        <div>
                            <p className="post">{tagObject.label}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="tagList-main-container">
                <div className="create-tag-btn-container">
                    <button onClick={()=> {navigate('/createTag')}}>Create Tag</button>
                </div>
            </div>
        </div>
    )
}

