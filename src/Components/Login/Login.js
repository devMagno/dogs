import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginForm } from './LoginForm'
import { Register } from './Register'
import { LostPassword } from './LostPassword'
import { ResetPassword } from './ResetPassword'

export function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<Register />} />
        <Route path="perdeu" element={<LostPassword />} />
        <Route path="resetar" element={<ResetPassword />} />
      </Routes>
    </div>
  )
}
