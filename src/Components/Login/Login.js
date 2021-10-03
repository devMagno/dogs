import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { LoginForm } from './LoginForm'
import { Register } from './Register'
import { LostPassword } from './LostPassword'
import { ResetPassword } from './ResetPassword'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'

export function Login() {
  const { isLogged } = useContext(UserContext)

  if (isLogged) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<Register />} />
          <Route path="perdeu" element={<LostPassword />} />
          <Route path="resetar" element={<ResetPassword />} />
        </Routes>
      </div>
    </section>
  )
}
