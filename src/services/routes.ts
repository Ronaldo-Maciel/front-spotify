/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios'
import { validateToken, getTokenInfo } from './validateToken'
// import { Album, Music, Artist } from './types'

type Request = Promise<object[]>

async function getFromAPi(path: string): Request {
  try {
    await validateToken()

    const url = process.env.API_URL
    const { token } = getTokenInfo()

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    }

    const response = await axios.get(`${url}${path}`, {
      headers,
    })

    return response.data
  } catch (error) {
    return error
  }
}

async function getSearch(value: string, type: string, limit?: number): Request {
  const data = await getFromAPi(`/search?q=${value}&type=${type}${limit ? `&limit=${limit}` : ''}`)
  return data
}

async function getAlbums(id: string): Request {
  const data = await getFromAPi(`/albums/${id}`)
  return data
}

export { getSearch, getAlbums, getFromAPi }
