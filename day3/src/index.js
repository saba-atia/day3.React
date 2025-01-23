import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Home from './component/pages/home';
import About from './component/pages/about';
import Contact from './component/pages/contact';
import Error from './component/pages/error';
import NavBar from './component/pages/navbar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router=createBrowserRouter([
{
  path:'/',
  element:<NavBar/>,
  
},
{
  path:'/',
  element:<Home/>,
},
{
  path:'/about',
  element:<About/>,
},
{
  path:'/contact',
  element:<Contact/>,
},

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

