/* eslint-disable @typescript-eslint/camelcase */

import axios from 'axios'
import qs from 'qs'

export interface Token {
  access_token?: string;
  expires_in?: number;
  error?: object;
}

async function createToken(): Promise<Token> {
  const url = process.env.API_ACCOUNTS_URL
  const clientId = process.env.CLIENT_ID
  const clientSecret = process.env.CLIENT_SECRET

  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  }

  const credencials = {
    grant_type: 'client_credentials',
  }

  try {
    const response = await axios.post(`${url}/api/token`, qs.stringify(credencials), headers)
    return response.data
  } catch (err) {
    return {
      error: err,
    }
  }
}

function setToken(token: string, expiresInMs: number): void {
  const currentDate = new Date()
  const config = {
    token,
    expiry: currentDate.getTime() + expiresInMs * 1000,
  }

  localStorage.setItem('token', JSON.stringify(config))
}

async function setTokenRequest(): Promise<void> {
  const { error, expires_in, access_token } = await createToken()

  if (error) return

  setToken(access_token, expires_in)
}

export function getTokenInfo(): { token: string; expiry: number } {
  return JSON.parse(localStorage.getItem('token'))
}

export async function validateToken(): Promise<void> {
  const tokenInfo = getTokenInfo()

  if (Object.is(tokenInfo, null)) {
    await setTokenRequest()
    return
  }

  const { expiry } = tokenInfo
  const currentDate = new Date()

  if (currentDate.getTime() > expiry) {
    localStorage.removeItem('token')
    await setTokenRequest()
  }
}
