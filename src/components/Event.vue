<script setup>
import Favorite from './Favorite.vue'
defineProps({
    event: Object
})
</script>

<template>
    <div>
        <router-link :to="`../event/${event.id}`">
            <img class="object-cover w-full h-72" :src="event?.images[0].url" :alt="event.name" />
            <div>
                <h3 class="text-2xl text-center">{{ event.name }}</h3>
            </div>

        </router-link>
        <Favorite :event="event" class=" text-center m-3 " />

    </div>
</template>

<style scoped></style>