import { HeaderNav } from './HeaderNav'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export function Header() {
  const [title, setTitle] = useState('')
  const location = useLocation()
  
  useEffect(() => {
    setTitle(location.pathname)
    if (location.pathname === "/conta/estatisticas")
      setTitle("Estatísticas")
    else if (location.pathname === "/conta/postar")
      setTitle("Publicar foto")
    else 
      setTitle("Minha conta")
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <HeaderNav />
    </header>
  )
}
