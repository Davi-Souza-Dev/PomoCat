import api from '@/api'
import router from '@/router'
import type { User } from '@/types'
import { defineStore } from 'pinia'

interface UserState {
  user: User
}
export const useUserStore = defineStore('UserStore', {
  state: (): UserState => {
    return {
      user: {
        username: '',
        email: '',
        token: '',
        photo: ''
      },
    }
  },
  actions: {
    async loginForm(email: string, password: string) {
      const formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)

      const response = await api.post('/auth/login', formData)

      if (response.data.success) {
        this.user.username = response.data.success.username
        this.user.email = response.data.success.email
        this.user.token = response.data.success.token
        this.user.photo = response.data.success.photo

        router.replace('/')
        return
      }

      return response.data.error
    },
    async loginGoogle(
      email: string | null,
      uid: string | undefined,
      username: string | null,
      photo: string | null,
    ) {
      if (email != null && uid != undefined && username != null && photo != null) {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', uid)
        formData.append('username', username)
        formData.append('photo', photo)

        const response = await api.post('/auth/logingoogle', formData)
        if (response.data.success) {
          this.loginForm(email,uid);
          return
        }
      }
    },
    async logout() {
      this.user.username = ''
      this.user.email = ''
      this.user.token = ''
    },
  },

  persist: {
    storage: localStorage,
  },
})
