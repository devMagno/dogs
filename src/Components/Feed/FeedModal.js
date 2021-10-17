import styles from './FeedModal.module.css'

import { PHOTO_GET } from '../../api'
import { useFetch } from '../../Hooks/useFetch'
import { useEffect } from 'react'
import { Error } from '../Helpers/Error'
import { Loader } from '../Helpers/Loader'
import { PhotoContent } from '../Photo/PhotoContent'

export function FeedModal({ photo, setModalPhoto }) {
  const { data, error, isLoading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {isLoading && <Loader />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}
