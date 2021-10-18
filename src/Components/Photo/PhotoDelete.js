import { PHOTO_DELETE } from '../../api'
import { useFetch } from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

export function PhotoDelete({ id }) {
  const { isLoading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Deseja realmente deletar a foto?')
    if (confirm) {
      const token = window.localStorage.getItem('token')
      const { url, options } = PHOTO_DELETE(id, token)

      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }

  return (
    <>
      {isLoading ? (
        <button className={styles.delete} disabled>
          Deletando
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  )
}
