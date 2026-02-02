import api from '@/api'
import router from '@/router'
import type { Card, Timer } from '@/types'
import { defineStore } from 'pinia'

interface CardState {
  cards: Card[]
}
export const useCardStore = defineStore('CardStore', {
  state: (): CardState => {
    return {
      cards: [],
    }
  },
  actions: {
    async getCards() {
      try{
        const response = await api.get('/getcatalog');
        return response.data
      }catch($erro){
        router.replace('/auth/login');
      }
    },
  },
})
