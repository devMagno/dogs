import { useEffect } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { FeedPhotoItem } from './FeedPhotoItem'
import { PHOTOS_GET } from '../../api'
import { Error } from '../Helpers/Error'
import { Loader } from '../Helpers/Loader'

import styles from './FeedPhotos.module.css'

export function FeedPhotos({ setModalPhoto }) {
  const { data, isLoading, error, request } = useFetch()

  useEffect(() => {
    async function getPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
      const { json } = await request(url, options)

      console.log(json)
    }

    getPhotos()
  }, [request])

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
