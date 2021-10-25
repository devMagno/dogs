import { useContext } from 'react'
import { USER_POST } from '../../api'
import { useFetch } from '../../Hooks/useFetch'
import { useForm } from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import { Button } from '../Forms/Button'
import { Input } from '../Forms/Input'
import { Error } from '../Helpers/Error'
import { Head } from '../Helpers/Head'

export function Register() {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const { loginUser } = useContext(UserContext)

  const { isLoading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const { response } = await request(url, options)
    if (response.ok) loginUser(username.value, password.value)
  }

  return (
    <section className="animateLeft">
      <Head title="Cadastre-se" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {isLoading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}
