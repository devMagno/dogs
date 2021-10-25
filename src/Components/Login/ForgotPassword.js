import { LOST_PASSWORD } from '../../api'
import { useFetch } from '../../Hooks/useFetch'
import { useForm } from '../../Hooks/useForm'
import { Button } from '../Forms/Button'
import { Input } from '../Forms/Input'
import { Error } from '../Helpers/Error'
import { Head } from '../Helpers/Head'

export function ForgotPassword() {
  const login = useForm()

  const { data, isLoading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()

    if (login.validateValue()) {
      const { url, options } = LOST_PASSWORD({
        login: login.value,
        url: window.location.href.replace('perdeu', 'nova-senha'),
      })

      request(url, options)
    }
  }

  return (
    <section className="animateLeft">
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email ou usuário" type="text" name="login" {...login} />
          {isLoading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}

      {error && <Error error={error} />}
    </section>
  )
}
