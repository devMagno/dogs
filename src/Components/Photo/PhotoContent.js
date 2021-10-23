import { Link } from 'react-router-dom'
import styles from './PhotoContent.module.css'
import { PhotoComments } from './PhotoComments'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { PhotoDelete } from './PhotoDelete'
import { Image } from '../Helpers/Image'

export function PhotoContent({ data, isSinglePage }) {
  const user = useContext(UserContext)
  const { photo, comments } = data
  return (
    <div className={`${styles.photo} ${isSinglePage ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            {!isSinglePage ? (
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            ) : (
              <span>{photo.title}</span>
            )}
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade === 1 ? 'ano' : 'anos'}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments
        id={photo.id}
        commentsList={comments}
        isSinglePage={isSinglePage}
      />
    </div>
  )
}
