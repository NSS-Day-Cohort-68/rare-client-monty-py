import { useEffect, useState } from "react"
import { createPost } from "../../services/PostService"
import { getCategories } from "../../services/CategoryService"

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}/${month}/${date}`;
  }


export const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState(1)
    const [user, setUser] = useState([]);
    const [currentDate, setCurrentDate] = useState(getDate());

    // useEffect(() => {
    //     getCategories().then((data) => setCategories(data))
    // }, [])
    

    useEffect(() => {
      const userId = JSON.parse(localStorage.getItem("rareClient-user"));
      if (userId) {
       setUser(userId.id);
      }
    }, []);




    

    const handleSave = () => {
        const postObject = {
            "user_id": user,
            "title": title,
            "category_id": parseInt(categoryId),
            "content": content,
            "approved": 1,
            "publication_date": currentDate,
            "image_url": null
        }
        createPost(postObject)
        // navigate("/postdetails")
    }

    return (
        <>
        <div>
            <div>
                <h1>Create A Post</h1>
                <div>
                    <input
                    type="text"
                    placeholder="Post Title"
                    onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                {/* <div>
                <label for="category-select"></label>
                    <select name="categories" id="category-select" 
                    onChange={(event) => setCategoryId(event.target.value) }>
                        <option value="">--Please choose a Category--</option>
                        {categories.map((m) => {
                        return (
                            <option value={m.id}>{m.name}</option>
                        ) })}
                    </select>
                </div> */}
                <div>
                    <input
                    type="text"
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                    ></input>
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
        </>
    )
}