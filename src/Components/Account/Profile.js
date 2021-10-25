import { useParams } from 'react-router-dom'
import { Feed } from '../Feed/Feed'
import { Head } from '../Helpers/Head'

export function Profile() {
  const { user } = useParams()

  return (
    <section className="container mainContainer">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  )
}
