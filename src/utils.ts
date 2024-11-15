export const validateFormField = (field: 'email' | 'password', value: string) => {
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
