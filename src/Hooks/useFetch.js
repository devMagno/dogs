import { useCallback, useState } from 'react'

export function useFetch() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const request = useCallback(async (url, options) => {
    let response
    let json
    try {
      setError(null)
      setIsLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if (!response.ok) throw new Error(json.message)
    } catch (err) {
      setError(json.message)
      json = null
    } finally {
      setData(json)
      setIsLoading(false)
      return { response, json }
    }
  }, [])

  return { data, isLoading, error, request }
}
