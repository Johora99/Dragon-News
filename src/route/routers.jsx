import * as React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../pages/HomePage";
import DragonNews from "../components/category-component/DragonNews";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ProductDetails from "../pages/ProductDetails";
import PrivatePage from "../pages/PrivatePage";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<HomePage></HomePage>,
            children:[
                {
                    path:"/",
                    element:<Navigate to="/category/01"></Navigate>
                },
                {
                    path:"/category/:id",
                    loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                    element:<DragonNews></DragonNews>
                },
            ]
        },
        {
            path:"/productDetails/:id",
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
            element:<PrivatePage><ProductDetails></ProductDetails></PrivatePage>
        },
        {
            path:"/login",
            element:<LoginPage></LoginPage>
        },
        {
            path:"/signUp",
            element:<SignUpPage></SignUpPage>
        }
    ]
  },
]);

export default router;