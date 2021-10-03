import { createContext, useCallback, useEffect, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'
import { useNavigate } from 'react-router'

export const UserContext = createContext()

export function UserStorage({ children }) {
  const [data, setData] = useState(null)
  const [isLogged, setIsLogged] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const logoutUser = useCallback(
    async function () {
      setData(null)
      setError(null)
      setIsLoading(false)
      setIsLogged(false)
      window.localStorage.removeItem('token')
      navigate('/login')
    },
    [navigate]
  )

  async function getUser(token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const userData = await response.json()

    setData(userData)
    setIsLogged(true)
  }

  async function loginUser(username, password) {
    try {
      setError(null)
      setIsLoading(true)
      const { url, options } = TOKEN_POST({ username, password })

      const tokenResponse = await fetch(url, options)

      if (!tokenResponse.ok) throw new Error('Erro: usuário inválido')
      const { token } = await tokenResponse.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch (error) {
      setError(error.message)
      setIsLogged(false)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')

      if (token) {
        try {
          setError(null)
          setIsLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token inválido.')
          await getUser(token)
        } catch (error) {
          logoutUser()
        } finally {
          setIsLoading(false)
        }
      }
    }
    autoLogin()
  }, [logoutUser])

  return (
    <UserContext.Provider
      value={{ loginUser, logoutUser, data, error, isLoading, isLogged }}
    >
      {children}
    </UserContext.Provider>
  )
}
