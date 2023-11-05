import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { apiKey } from '@/apiKey'

export const useEventsStore = defineStore('events', {
  state: () => {
    return {
      events: reactive({})
    }
  },

  actions: {
    async fetchEvents({keyword='', id=null}={}) {

      const url = `https://app.ticketmaster.com/discovery/v2/events.json?size=21${keyword!=''?`&keyword=${keyword}`:''}&${id!=null?`id=${id}&`:''}countryCode=NL&apikey=${apiKey}`

      return await fetch(url)
        .then((res) => res.json())
        .then((result) => (this.events = result?._embedded?.events))
    }
  }
})
