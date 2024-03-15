export const createNewTag = async (x) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(x)
    }
   return await fetch(`http://localhost:8088/tags`, options) 
}

export const getAllTags = () => {
    return fetch('http://localhost:8088/tags').then((res) => res.json())
}