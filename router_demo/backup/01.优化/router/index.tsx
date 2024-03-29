import Login from '../views/Login'
import Article from '../views/Article'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'article',
    element: <Article/>
  }
])

export default router