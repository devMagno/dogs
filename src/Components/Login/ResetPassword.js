import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RESET_PASSWORD } from '../../api'
import { useFetch } from '../../Hooks/useFetch'
import { useForm } from '../../Hooks/useForm'
import { Button } from '../Forms/Button'
import { Input } from '../Forms/Input'
import { Error } from '../Helpers/Error'
import { Head } from '../Helpers/Head'

export function ResetPassword() {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')

  const password = useForm('')

  const { error, isLoading, request } = useFetch()

  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()

    if (password.validateValue()) {
      const { url, options } = RESET_PASSWORD({
        login,
        key,
        password: password.value,
      })

      const { response } = await request(url, options)

      if (response.ok) navigate('/login')
    }
  }

  return (
    <section>
      <Head title="Nova senha" />
      <h1 className="title">Nova senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {isLoading ? (
          <Button disabled>Enviando</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}
