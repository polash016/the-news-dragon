import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/Main/NewsLayout";
import News from "../pages/Home/News/News/News";
import LoginLayout from "../layouts/Main/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
    {
      path: "category",
      element: <Main />,
      children: [
        
        {
          path: ':id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`https://the-news-dragon-server-polash016.vercel.app/categories/${params.id}`)
        }
      ],
    },
    {
      path: '/news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News></News></PrivateRoute>,
          loader: ({params}) => fetch(`https://the-news-dragon-server-polash016.vercel.app/news/${params.id}`)
        }
      ]
    }
  ]);
  export default router