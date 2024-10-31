import { createBrowserRouter } from "react-router-dom"
import BlogHome from "../blogPage/pages/BlogHome"
import BlogSignIn from "../blogPage/auth/BlogsignIn"
import BlogRegister from "../blogPage/auth/BlogRegister"
import LayOut from "../components/common/LayOut"
import DetailedBlog from "../blogPage/pages/DetailedBlog"
import PostBlog from "../blogPage/pages/PostBlog"
import BlogPrivateRoute from "./blogPrivateRoute"

export const blogRouter = createBrowserRouter([
    {
        path: "/blog",
        element:
            <LayOut />,
        children: [
            {
                index: true,
                element: <BlogPrivateRoute>
                    <BlogHome />
                </BlogPrivateRoute>
            },
            {
                path: 'post',
                element: <PostBlog />
            },

        ]

    },

    {
        path: "/:id/read",
        element: <DetailedBlog />
    },
    {
        path: "/blog-sign-in",
        element: <BlogSignIn />
    },
    {
        path: "/blog-register",
        element: <BlogRegister />
    },
])