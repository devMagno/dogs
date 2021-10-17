import styles from './PhotoPost.module.css'
import { Input } from '../Forms/Input'
import { Button } from '../Forms/Button'
import { Error } from '../Helpers/Error'
import { useForm } from '../../Hooks/useForm'
import { useFetch } from '../../Hooks/useFetch'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { PHOTO_POST } from '../../api'

export function PhotoPost() {
  const name = useForm()
  const weight = useForm('number')
  const age = useForm('number')
  const [img, setImg] = useState({})
  const { data, error, isLoading, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData()

    formData.append('img', img.raw)
    formData.append('nome', name.value)
    formData.append('peso', weight.value)
    formData.append('idade', age.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <section className={`${styles.photoPost} animateLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...name} />
        <Input label="Peso" type="number" name="peso" {...weight} />
        <Input label="Idade" type="number" name="idade" {...age} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {isLoading ? (
          <Button disabled>Enviando</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url("${img.preview}")` }}
          ></div>
        )}
      </div>
    </section>
  )
}
