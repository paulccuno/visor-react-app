type Options = RequestInit & { auth?: boolean }

const API_BASE = 'https://api.com'

export async function httpFetchClient<T>(
  endpoint: string,
  options?: Options,
): Promise<T> {
  const headers = new Headers({
    'Content-Type': 'application/json',
    ...(options?.headers || {}),
  })

  if (options?.auth) {
    const token = localStorage.getItem('auth_token')

    if (token) headers.set('Authorization', `Bearer ${token}`)
  }

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    })

    if (!response.ok)
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)

    return await response.json()
  } catch (err) {
    console.error('[Interceptor]', err)
    throw err
  }
}
