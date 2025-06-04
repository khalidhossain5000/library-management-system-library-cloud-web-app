import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Routes/PrivateRoute";
import AllBooks from "../Pages/AllBooks/AllBooks";
import AddBook from "../Pages/AddBook/AddBook";
import BorrowedBooks from "../Pages/BorrowedBook/BorrowedBooks";
import BookCategory from "../Pages/BookCategory/BookCategory";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'all-books',
                element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },           
            {
                path:'add-books',
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
            },            
            {
                path:'borrowed-books',
                element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            },
            {
                path:'book-categories',
                Component:BookCategory
            },
            {
                path:'login',
                Component:Login
            },
            {
                path:'register',
                Component:Register
            }
        ]
    }
])