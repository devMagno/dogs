import { useContext } from 'react'
import { Navigate, Route } from 'react-router'
import { UserContext } from '../../UserContext'

export function ProtectedRoute(props) {
  const { isLogged } = useContext(UserContext)

  if (isLogged === true) return <Route {...props} />
  else if (isLogged === false) return <Navigate to="/login" />
  else return null
}
