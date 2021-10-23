import { useState } from 'react'
import { COMMENT_POST } from '../../api'
import { Error } from '../Helpers/Error'
import { useFetch } from '../../Hooks/useFetch'
import { ReactComponent as Send } from '../../Assets/enviar.svg'
import styles from './PhotoCommentForm.module.css'

export function PhotoCommentForm({ id, setComments, isSinglePage }) {
  const [comment, setComment] = useState('')

  const { request, error } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()

    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(id, token, { comment })

    const { response, json } = await request(url, options)

    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${isSinglePage ? styles.single : ''}`}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button className={styles.button}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  )
}
