import { useEffect } from 'react'
import { STATS_GET } from '../../api'
import { useFetch } from '../../Hooks/useFetch'
import { Head } from '../Helpers/Head'
import { Loader } from '../Helpers/Loader'
import { Error } from '../Helpers/Error'
import { StatsCharts } from './StatsCharts'

export function Stats() {
  const { data, isLoading, error, request } = useFetch()

  useEffect(() => {
    async function fetchData() {
      const token = window.localStorage.getItem('token')
      const { url, options } = STATS_GET(token)

      await request(url, options)
    }

    fetchData()
  }, [request])

  if (isLoading) return <Loader />
  if (error) return <Error error={error} />
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <StatsCharts data={data} />
      </div>
    )
  else return null
}
