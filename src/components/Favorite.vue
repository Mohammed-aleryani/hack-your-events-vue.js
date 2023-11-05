<script setup>
import { useFavoritesStore } from '../stores/useFavoritesStore.js'

defineProps({
    event: Object
})

const favoritesStore = useFavoritesStore()

</script>

<template >
    <div @click="favoritesStore.toggleFavorite(event)">
        <font-awesome-icon v-if="favoritesStore.inFavorites(event)" icon="fa-solid fa-heart" />
        <font-awesome-icon v-else icon="fa-regular fa-heart" />

    </div>
</template>

<style ></style>