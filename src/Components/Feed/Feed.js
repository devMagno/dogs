import { useEffect, useState } from 'react'
import { FeedModal } from './FeedModal'
import { FeedPhotos } from './FeedPhotos'
import { PropTypes } from 'prop-types'

export function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = useState(null)
  const [pages, setPages] = useState([1])
  const [keepFetchingPosts, setKeepFetchingPosts] = useState(true)

  useEffect(() => {
    let wait = false

    function infiniteScroll() {
      if (keepFetchingPosts) {
        const scroll = window.scrollY
        const pageHeight = document.body.offsetHeight - window.innerHeight

        if (scroll > pageHeight * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true

          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [pages, keepFetchingPosts])

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          setModalPhoto={setModalPhoto}
          user={user}
          setKeepFetchingPosts={setKeepFetchingPosts}
        />
      ))}
    </div>
  )
}

Feed.defaultProps = {
  user: 0,
}

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
}
