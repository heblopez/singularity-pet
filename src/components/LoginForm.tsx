import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { login } from '@/services/auth.services'
import { useNavigate } from 'react-router-dom'

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

  const validateField = (field: string, value: string) => {
    const validationRules: { [key: string]: (value: string) => string } = {
      email: email => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!email) return 'El email es requerido'
        if (!emailRegex.test(email)) return 'Email inválido'
        return ''
      },
      password: password => {
        if (!password) return 'La contraseña es requerida'
        if (password.length < 6) return 'La contraseña debe tener al menos 6 caracteres'
        return ''
      }
    }

    return validationRules[field](value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, data: { ...prev.data, [name]: value } }))
    setFormState(prev => ({
      ...prev,
      validationErrors: { ...prev.validationErrors, [name]: validateField(name, value) }
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

      const res = await login(formState.data)

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
      <div className='flex items-center gap-8 mb-4'>
        <div className='w-2 h-10 bg-tomato' />
        <h2 className='text-3xl leading-10 font-bold text-gray-900'>BIENVENIDO</h2>
      </div>
      <div className='flex flex-col gap-4 mb-3'>
        <div className='relative'>
          <input
            type='email'
            name='email'
            id='email'
            value={formState.data.email}
            onChange={handleChange}
            className={`block w-full max-h-[48px] shadow-input-box text-sm px-4 pt-6 pb-2 text-gray-900 bg-transparent border-1 appearance-none focus:outline-none peer
                  ${formState.validationErrors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
            placeholder=' '
            autoComplete='email'
          />
          <label
            htmlFor='email'
            className='absolute text-lg leading-3 text-gray-500 duration-300 transform -translate-y-3 scale-75 z-10 top-4 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 cursor-text'
          >
            EMAIL
          </label>
          {formState.validationErrors.email && (
            <p className='mt-2 text-xs text-red-500'>
              {formState.validationErrors.email}
            </p>
          )}
        </div>

        <div className='relative'>
          <input
            type='password'
            name='password'
            id='password'
            value={formState.data.password}
            onChange={handleChange}
            className={`block w-full max-h-[48px] shadow-input-box text-sm px-4 pt-6 pb-2 text-gray-900 bg-transparent border-1 appearance-none focus:outline-none peer
                ${formState.validationErrors.password ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
            placeholder=' '
            autoComplete='current-password'
          />
          <label
            htmlFor='password'
            className='absolute text-lg leading-3 text-gray-500 duration-300 transform -translate-y-3 scale-75 z-10 top-4 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 cursor-text'
          >
            CONTRASEÑA
          </label>
          {formState.validationErrors.password && (
            <p className='mt-2 text-xs text-red-500'>
              {formState.validationErrors?.password}
            </p>
          )}
        </div>
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

      <button
        type='submit'
        disabled={!isFormValid() || formState.isLoading}
        className={`w-auto self-center py-6 px-11 rounded-full text-white font-medium text-xl h-[75px] mb-2 bg-dodger-blue
              ${
                isFormValid() && !formState.isLoading ?
                  'hover:bg-blue-600'
                : 'cursor-not-allowed'
              } transition-colors relative`}
      >
        {formState.isLoading ?
          <span className='flex items-center justify-center'>
            <Loader2 className='animate-spin -ml-1 mr-3 h-5 w-5' />
            Cargando...
          </span>
        : 'INICIAR SESIÓN'}
      </button>

      <div className='text-center text-sm text-aluminium'>
        AÚN NO TENGO CUENTA{'  '}
        <a href='#' className='text-venice-blue hover:text-blue-600 font-medium'>
          REGISTRARSE
        </a>
      </div>
    </form>
  )
}
