import { useState } from 'react'
import { Link } from 'react-router-dom'

export function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        console.log(r)
        return r.json()
      })
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value)
          }}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value)
          }}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}
