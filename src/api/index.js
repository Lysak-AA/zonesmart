import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://dev-ar.zonesmart.ru/api/'
})

client.interceptors.request.use((request) => {
  const userAccessToken = JSON.parse(localStorage.getItem('accessToken'))
  if (userAccessToken) request.headers['Authorization'] = `JWT ${userAccessToken}`
  return request
})

export const login = async function (email, password) {
  return await client.post('user/jwt/create/', {
    email, password
  })
}

export const getProducts = async function (limit = 10, offset = 0) {
  return await client.get(`/product/?limit=${limit}&offset=${offset}`)
}