export type Method = 'GET'

interface Fetch {
  endpoint: string
  query?: Query
}

type Query = Record<string, string | string[] | undefined>

export interface Response {
  ok: boolean
  status: number
  data?: object
  error?: string
}

const baseURL: string = 'http://backend:8000'

export const FETCH = async ({
  endpoint,
  query
}: Fetch): Promise<Response> => {
  try {
    const response = await fetch(
      `${baseURL}${endpoint}`
    )

    const { status } = response

    if (response.ok) {
      const data = await response.json()
      return { ok: true, status, data }
    }

    return {
      ok: false,
      status,
      error: `Error ${status}`
    }
  } catch (err) {
    return { ok: false, status: -1, error: `Error: ${err}` }
  }
}
