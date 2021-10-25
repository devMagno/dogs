import { Link } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'
import { Button } from '../Forms/Button'
import { Input } from '../Forms/Input'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { Error } from '../Helpers/Error'
import styles from './LoginForm.module.css'
import buttonStyles from '../Forms/Button.module.css'
import { Head } from '../Helpers/Head'

export function LoginForm() {
  const username = useForm()
  const password = useForm()

  const { loginUser, error, isLoading } = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (username.validateValue() && password.validateValue()) {
      loginUser(username.value, password.value)
    }
  }

  return (
    <section className="animateLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {isLoading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link className={styles.forgot} to="/login/esqueceu">
        Esqueceu sua senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={buttonStyles.button} to="/login/criar">
        Cadastro
      </Link>
    </section>
  )
}
