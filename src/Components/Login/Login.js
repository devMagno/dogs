import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { LoginForm } from './LoginForm'
import { Register } from './Register'
import { ForgotPassword } from './ForgotPassword'
import { ResetPassword } from './ResetPassword'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'
import { NotFound } from '../NotFound'

export function Login() {
  const { isLogged } = useContext(UserContext)

  if (isLogged) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<Register />} />
          <Route path="esqueceu" element={<ForgotPassword />} />
          <Route path="nova-senha" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}
