import axios from 'axios'
import type { AxiosInstance } from 'axios'

// export const url = 'https://dash.bakerfast.com.br';
export const url = 'https://dashpomocat.devbyteztudios.com.br'

const api: AxiosInstance = axios.create({
  baseURL: `${url}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const userJson = localStorage.getItem('UserStore')
  if (userJson != null) {
    const user = JSON.parse(userJson)
    const token = user.user.token
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  return config
})

export default api
