import axios from 'axios'
import state from '@/store/state'

export const client = axios.create({
  baseURL: 'https://dev-ar.zonesmart.ru/api/'
})

client.interceptors.request.use((request) => {
  const userAccessToken = JSON.parse(localStorage.getItem('accessToken'))
  if (userAccessToken) request.headers['Authorization'] = `JWT ${userAccessToken}`
  return request
})

client.interceptors.response.use((response) => {
  return response
},
  async (error) => {
    console.log('error: ' + error.response.status)
    if (error.response.status === 401) {
      const refreshToken = JSON.parse(localStorage.getItem('refreshToken'))
      if (!refreshToken) { return }
      try {
        const response = await refresh(refreshToken)
        localStorage.setItem('accessToken', JSON.stringify(response.data.access))
        state.actions.refresh(response.data.access)
      } catch (err) {
        console.warn(err)
      }
    }
  }
)

export const login = async function (email, password) {
  return await client.post('user/jwt/create/', {
    email, password
  })
}

export const refresh = async function (refresh) {
  return await client.post('user/jwt/refresh/', {
    refresh
  })
}

export const getProducts = async function (limit = 10, offset = 0) {
  return await client.get(`/product/?limit=${limit}&offset=${offset}`)
}