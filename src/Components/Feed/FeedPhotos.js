import { useEffect } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { FeedPhotoItem } from './FeedPhotoItem'
import { PHOTOS_GET } from '../../api'
import { Error } from '../Helpers/Error'
import { Loader } from '../Helpers/Loader'

import styles from './FeedPhotos.module.css'

export function FeedPhotos({
  user,
  page,
  setModalPhoto,
  setKeepFetchingPosts,
}) {
  const { data, isLoading, error, request } = useFetch()

  useEffect(() => {
    async function getPhotos() {
      const total = 6
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)

      if (response && response.ok && json.length < total)
        setKeepFetchingPosts(false)
    }

    getPhotos()
  }, [request, user, page, setKeepFetchingPosts])

  if (error) return <Error error={error} />

  if (isLoading) return <Loader />

  if (data)
    return (
      <ul className={`${styles.feed} animateLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
  else return null
}
