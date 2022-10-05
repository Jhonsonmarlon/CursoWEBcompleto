import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"

import { Home } from "./Home"
import { Login } from "./Login"
import { Signup } from "./Signup"
import { Dashboard } from "./Dashboard"
import { Dash2 } from "./Dash2"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/dash2",
        element: <Dash2 />,
    },
])

export const Router = () => (
    <RouterProvider router={router} />
)