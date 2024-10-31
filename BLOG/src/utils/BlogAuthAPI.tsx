import axios from "axios"


const url: string = "https://blog-backend-pisi.onrender.com/api/v1/auth"

export const BlogCeateUser = async (data: any) => {
    try {
        const config: any = {
            "content-type": "multipart/form-data"
        }
        return await axios.post(`${url}/register`, data, config).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const blogSigninUser = async (data: any) => {
    try {
        return await axios.post(`${url}/sign-in`, data).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const readUsers = async () => {
    try {
        return await axios.get(`${url}/all-users`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const readOneUser = async (id: string) => {
    try {
        return await axios.get(`${url}/${id}/user-detail`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}