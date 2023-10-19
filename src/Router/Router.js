import Home from "../Component/Home";
import Main from "../Main/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[{

            path:"/",
            element:<Home></Home>,

        }]
    }
])