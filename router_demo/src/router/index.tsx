import Login from '../views/Login'
import Article from '../views/Article'
import Layout from '../views/Layout'
import Board from '../views/Board'
import About from '../views/About'
import NotFound from '../views/NotFound'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        // 设置为默认二级路由 一级访问时自动渲染
        // path:'board', 原本跳转的链接可以改了
        index:true,
        element:<Board/>
      },
      {
        path:'about',
        element:<About/>
      }
    ]
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'article/:id',
    element: <Article/>
  },
  {
    path:'*',
    element: <NotFound/>
  }
])

export default router