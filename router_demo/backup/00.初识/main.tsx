// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/login',
    element: <div>Login</div>
  },
  {
    path:'article',
    element: <div>Article</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>
    
  </RouterProvider>
)
