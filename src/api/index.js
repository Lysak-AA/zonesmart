import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://dev-ar.zonesmart.ru/api/'
})

client.interceptors.request.use((request) => {
  const userAccessToken = localStorage.getItem('accessToken')
  if (userAccessToken) request.headers['Authorization'] = `JWT ${userAccessToken}`
  return request
})

export const login = async function (email, password) {
  return await client.post('user/jwt/create/', {
    email, password
  })
}