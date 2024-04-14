import React from 'react'
import Home from './Components/Home/Home.jsx'
import Main from './Components/Main/Main.jsx';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sign from './Components/Auth/Sign/Sign.jsx';
import SignUp from './Components/Auth/Sign/SignUp/SignUp.jsx';
import Dashboard from './Components/Dash/Dashboard.jsx';
import UserSetting from './Components/UserSetting/UserSetting.jsx'
import Users from './Components/Users/Users.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Appearance from './Components/Appearence/Appearance.jsx';
import LogOut from './Components/LogOut/LogOut.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'/home/main',
    element:<Main/>,

  },
  {
    path:'/home/main/sign',
    element:<Sign/>,
  },
  {
    path:'/home/main/signUp',
    element:<SignUp/>
  },
  {
    path:'/home/main/sign/dash',
    element:<Dashboard/>
  
  },
  {
    path:'/home/main/sign/dash/logout',
    element:<LogOut/>
  },
  {
    path:'/home/main/sign/dash/setting',
    element:<UserSetting/>
  },
  {
    path: '/home/main/sign/dash/users',
    element: <Users/>,
  },
  {
    path:'/home/main/sign/dash/profile',
    element:<Profile/>
  },
  {
  path:'home/main/sign/dash/users/appearance',
  element:<Appearance/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
