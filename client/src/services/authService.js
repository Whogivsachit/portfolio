import Api from '@/services/api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },

  login (credentials) {
    return Api().post('login', credentials)
  },

  getUser (id) {
    return Api().get(`user/${id}`)
  },

  validateToken (token) {
    return Api().post('user/validate', token)
  },
}
