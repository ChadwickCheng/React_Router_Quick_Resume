import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      Login Page
      <Link to="/article">To Article</Link>
      <button onClick={()=>navigate('/article')}>编程式导航</button>
      <button onClick={()=>navigate('/article?id=1001&name=jack')}>searchParams传参</button>
      {/* 记得去index配置占位符 */}
      <button onClick={()=>navigate('/article/2002')}>params传参</button>
    </div>
  )
}

export default Login