import Cookies from 'js-cookie'

export const setToken = (token) => {
  Cookies.set('_uuid', token, { sameSite: 'none', secure: true })
}

export const getToken = () => {
  return Cookies.get('_uuid', { sameSite: 'none', secure: true })
}

export const removeToken = () => {
  return Cookies.remove('_uuid', { sameSite: 'none', secure: true })
}
