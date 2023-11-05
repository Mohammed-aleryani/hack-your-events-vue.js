<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Events from '../components/Events.vue';
import { useFavoritesStore } from '../stores/useFavoritesStore';
const favoritesStore = useFavoritesStore()
</script>

<template >

    <div class="flex flex-col justify-between h-screen">
        <Header />
        <p class="text-center text-xl" v-if="favoritesStore.favorites.length===0"> There is no favorite events</p>

        <Events :events="favoritesStore.favorites" class="grid grid-cols-3 gap-4  w-10/12 px-8 mb-5 mx-auto" />
        <Footer />
    </div>
</template>

<style ></style>