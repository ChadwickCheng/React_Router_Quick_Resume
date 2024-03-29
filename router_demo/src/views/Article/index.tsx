import { useSearchParams, useParams } from "react-router-dom"

const Article = () => {
  const [params] = useSearchParams()
  const params1 = useParams()
  const id = params.get('id')
  const name = params.get('name')
  const id1 = params1.id
  return (
    <div>
      Article
      {'获取searchParams传递的id: '+id+' 获取searchParams传递的name: '+name}
      <hr />
      {'获取params传递的id: '+id1}
    </div>
  )
}

export default Article