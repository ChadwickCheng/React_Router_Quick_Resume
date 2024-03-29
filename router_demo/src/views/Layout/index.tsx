import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      一级路由layout
      <hr />
      {/* <Link to='/board'>面板</Link> */}
      <Link to='/'>面板</Link>
      <hr />
      <Link to='/about'>关于</Link>
      {/* 二级路由出口 */}
      <Outlet/>
    </div>
  )
}

export default Layout