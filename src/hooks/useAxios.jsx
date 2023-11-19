import axios from 'axios'
import React, { useEffect, useState } from 'react'

axios.defaults.baseURL = 'https://opentdb.com/'

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then(res => setResponse(res.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }
    fetchData()
    
  }, [url])
  
  return {response, loading, error}
}

export default useAxios