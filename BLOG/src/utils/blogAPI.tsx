import axios from "axios"


const URL: string = "https://blog-backend-pisi.onrender.com/api/v1/post"
export const readBlog = async () => {
    try {
        return await axios.get(`${URL}/posts`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const readOneBlog = async (id: string) => {
    try {
        return await axios.get(`${URL}/${id}/post-detail`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const readUserBlog = async (id: string) => {
    try {
        return await axios.get(`${URL}/${id}/read-user-post`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const createBlog = async (id: string, data: any) => {
    try {
        return await axios.post(`${URL}/${id}/create`, data).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}