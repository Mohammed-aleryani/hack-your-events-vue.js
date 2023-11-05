<script setup>
import SearchInput from './SearchInput.vue';
import { useRoute } from 'vue-router';


const routeName=useRoute().name

</script>

<template>
    <div class="bg-gray-900 h-20 text-white	mb-1 flex-shrink-0 shadow-md shadow-neutral-400">
        <div class="p-2  flex justify-around items-center h-full ">
            <router-link to="/">
                <h1 class="text-3xl font-bold">HackYourEvents</h1>
            </router-link>


            <SearchInput class="text-black" />

            <div class="flex-row justify-between place-content-center	">
                <RouterLink class="mx-2" :class="routeName=='home'?'text-gray-600':''"  to="/">Home</RouterLink>
                <RouterLink class="mx-2" :class="routeName=='favorites'?'text-gray-600':''"  to="/Favorites">Favorite</RouterLink>
                <a class="mx-2" href="#footer">Contact us</a>
            </div>
        </div>



    </div>
</template>

<style scoped></style>