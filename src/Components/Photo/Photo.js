import { useEffect } from 'react'
import { useParams } from 'react-router'
import { PHOTO_GET } from '../../api'
import { useFetch } from '../../Hooks/useFetch'
import { Error } from '../Helpers/Error'
import { Head } from '../Helpers/Head'
import { Loader } from '../Helpers/Loader'
import { PhotoContent } from '../Photo/PhotoContent'

export function Photo() {
  const { id } = useParams()

  const { data, isLoading, error, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request(url, options)
  }, [request, id])

  if (error) return <Error error={error} />
  if (isLoading) return <Loader />
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} isSinglePage={true} />
      </section>
    )
  else return null
}
