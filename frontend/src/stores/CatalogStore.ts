import api from '@/api'
import router from '@/router'
import type { Card } from '@/types'
import { defineStore } from 'pinia'
import { useCardStore } from './CardStore'

interface CatalogState {
  cards: Card[]
  active: boolean
  totalCards: number
}
export const useCatalogStore = defineStore('CatalogStore', {
  state: (): CatalogState => {
    return {
      cards: [],
      active: false,
      totalCards: 0,
    }
  },
  actions: {
    async showCatalog() {
      try {
        if (this.active == false) {
          const cardsStore = useCardStore()

          const data = await cardsStore.getCards()
          this.cards = data.cards
          this.totalCards = data.total
          this.active = true
        }else{
            this.active = false;
        }
      } catch ($erro) {
        console.log($erro)
      }
    },
  },
})
