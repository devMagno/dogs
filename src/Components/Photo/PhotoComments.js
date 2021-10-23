import { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../UserContext'
import { PhotoCommentForm } from './PhotoCommentForm'

import styles from './PhotoComments.module.css'

export function PhotoComments({ id, commentsList, isSinglePage }) {
  const [comments, setComments] = useState(() => commentsList)
  const { isLogged } = useContext(UserContext)
  const commentsSection = useRef(null)

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul
        className={`${styles.comments} ${isSinglePage ? styles.single : ''}`}
        ref={commentsSection}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {isLogged && <PhotoCommentForm id={id} setComments={setComments} isSinglePage={isSinglePage} />}
    </>
  )
}
