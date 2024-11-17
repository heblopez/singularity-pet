import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { loginService } from '@/services/auth.services'
import { useNavigate } from 'react-router-dom'
import SingularityInput from './SingularityInput'
import SingularityButton from './SingularityButton'
import FormTitle from './FormTitle'
import { validateFormField } from '@/utils'

export default function LoginForm() {
  const initialState = {
    data: {
      email: '',
      password: ''
    },
    isLoading: false,
    validationErrors: {
      email: '',
      password: ''
    },
    loginError: ''
  }

  const [formState, setFormState] = useState(initialState)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [name]: value },
      validationErrors: {
        ...prev.validationErrors,
        [name]: validateFormField(name as 'email' | 'password', value)
      }
    }))
  }

  const isFormValid = () => {
    return (
      !formState.validationErrors.email &&
      !formState.validationErrors.password &&
      formState.data.email &&
      formState.data.password
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault()
      setFormState(prev => ({ ...prev, isLoading: true }))

      const res = await loginService(formState.data)

      if ('token' in res) {
        document.cookie = `token=${res.token}`
        setFormState(prev => ({ ...prev, loginError: '', isLoading: false }))
        navigate('/')
      } else {
        console.log('res with error on login:', res)
        throw new Error(res.error)
      }
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        loginError: `Error: ${(error as Error).message}`
      }))
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-6 w-full max-w-[448px] px-4'
    >
      <FormTitle>Bienvenido</FormTitle>
      <div className='flex flex-col gap-4 mb-3'>
        <SingularityInput
          label='Email'
          name='email'
          id='email'
          value={formState.data.email}
          onChange={handleChange}
          errorMessage={formState.validationErrors.email}
        />
        <SingularityInput
          label='Contraseña'
          name='password'
          id='password'
          value={formState.data.password}
          onChange={handleChange}
          errorMessage={formState.validationErrors.password}
          type='password'
        />
      </div>

      <div className='text-right mb-6'>
        <a href='#' className='text-sm text-aluminium hover:text-gray-700'>
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      {formState.loginError && (
        <div className='p-3 bg-red-100 text-red-700 rounded-lg text-sm'>
          {formState.loginError}
        </div>
      )}

      <SingularityButton
        type='submit'
        onClick={handleSubmit}
        disabled={!isFormValid() || formState.isLoading}
        className='font-bold text-white-smoke'
      >
        {formState.isLoading ?
          <span className='flex items-center justify-center'>
            <Loader2 className='animate-spin -ml-1 mr-3 h-5 w-5' />
            Cargando...
          </span>
        : 'INICIAR SESIÓN'}
      </SingularityButton>

      <div className='text-center text-sm text-aluminium'>
        AÚN NO TENGO CUENTA{'  '}
        <a href='#' className='text-venice-blue hover:text-blue-600 font-medium'>
          REGISTRARSE
        </a>
      </div>
    </form>
  )
}
