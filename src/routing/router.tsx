import { createBrowserRouter } from "react-router-dom";
import App from "../componets/App";
import ErrorPage from "../componets/ErrorPage";

export const router = createBrowserRouter([

    {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    },
    
    ]);