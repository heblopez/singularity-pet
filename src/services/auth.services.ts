import { API_URL } from '@/config'
import { ILoginForm } from '@/types'

export async function loginService(
  form: ILoginForm
): Promise<{ token: string } | { error: string }> {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (!response.ok) {
      const errorResponse = await response.json()
      throw new Error(errorResponse.error)
    }

    const data = await response.json()
    return data as Promise<{ token: string }>
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message }
    }
    return { error: 'Error al intentar iniciar sesión' }
  }
}
