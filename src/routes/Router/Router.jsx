import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import PostJobs from "../../pages/PostJobs/PostJobs";
import FindJobs from "../../pages/FindJobs/FindJobs";
import Home from "../../pages/HomePage/Home/Home";
import Login from "../../pages/Authentication/Login/Login";
import SignUp from "../../pages/Authentication/SignUp/SignUp";
import ErrorPage from "../../components/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,

        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                index: true,
                element: <Home></Home>
            },

            {
                path: "/post-jobs",
                element: <PostJobs></PostJobs>
            },

            {
                path: "/find-jobs",
                element: <FindJobs></FindJobs>
            },


            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            }
        ]
    },

]);

export default router;