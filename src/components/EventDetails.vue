<script setup>
import Favorite from './Favorite.vue'
defineProps({
    event: Object
})
</script>

<template>
    <div class="text-center font-semibold w-2/6 p-10  m-auto shadow my-8 flex flex-col self-center">
        <img class="" :src="event.images[0].url" :alt="event.name" />
        <h3 class="text-2xl">{{ event.name }}</h3>
        <p class="event-date">Date: {{ event.dates.start.localDate }}</p>
        <p class="event-time">Time: {{ event.dates.start.localTime }}</p>
        <p class="event-venue">Venue: {{ event._embedded.venues[0].name }}</p>
        <p class="event-venue">
            city: {{ event._embedded.venues[0].city.name }}
        </p>
        <p class="event-venue">
            address: {{ event._embedded.venues[0].address.line1 }}
        </p>
        <p class="event-venue">
            Post code: {{ event._embedded.venues[0].postalCode }}
        </p>
        <a :href="event.url"> Book your ticket here </a>
        <Favorite :event="event" class=" text-center m-3 " />

    </div>
</template>

<style scoped></style>