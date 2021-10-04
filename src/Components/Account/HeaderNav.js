import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg'
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg'
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg'
import { ReactComponent as Logout } from '../../Assets/sair.svg'
import styles from './HeaderNav.module.css'

export function HeaderNav() {
  const { logoutUser } = useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta">
        <MyPhotos />
        Minhas fotos
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Statistics /> Estatísticas
      </NavLink>
      <NavLink to="/conta/postar">
        <AddPhoto />
        Adicionar foto
      </NavLink>
      <button onClick={logoutUser}>
        <Logout />
        Sair
      </button>
    </nav>
  )
}
