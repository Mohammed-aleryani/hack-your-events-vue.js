import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favoritesStore', {
  state: () => {
    return {
      favorites: JSON.parse(localStorage.getItem('favorites')) || []
    }
  },

  actions: {
    inFavorites(event) {
      return this.favorites.find((el) => el.id == event.id) !== undefined ? true : false
    },

    toggleFavorite(event) {
      if (this.inFavorites(event)) {
        this.favorites = this.favorites.filter((e) => e.id !== event.id)
      } else {
        this.favorites.push(event)
      }

      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
  }
})
