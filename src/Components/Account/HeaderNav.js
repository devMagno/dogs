import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg'
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg'
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg'
import { ReactComponent as Logout } from '../../Assets/sair.svg'
import { useLocation } from 'react-router'
import { useMedia } from '../../Hooks/useMedia'
import styles from './HeaderNav.module.css'

export function HeaderNav() {
  const { logoutUser } = useContext(UserContext)
  const isMobile = useMedia('(max-width: 40rem)')

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

  const { pathname } = useLocation()

  useEffect(() => {
    setIsMobileMenuActive(false)
  }, [pathname])

  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            isMobileMenuActive && styles.mobileButtonActive
          }`}
          onClick={() => {
            setIsMobileMenuActive(!isMobileMenuActive)
          }}
        ></button>
      )}

      <nav
        className={`${isMobile ? styles.mobileNav : styles.nav} ${
          isMobileMenuActive && styles.activeMobileNav
        }`}
      >
        <NavLink to="/conta" end>
          <MyPhotos />
          {isMobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Statistics />
          {isMobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <AddPhoto />
          {isMobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={logoutUser}>
          <Logout />
          {isMobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}
