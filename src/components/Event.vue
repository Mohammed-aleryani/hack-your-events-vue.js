<script setup>
defineProps({
  event:Object
})
</script>

<template>
        <div class="card">
        <router-link :to="`../event/${ event.id }`"> 
            <img class="object-cover w-full h-72" :src="event?.images[0].url" :alt="event.name" />
            <div class="card-content">
                <h3 class="text-2xl text-center">{{ event.name }}</h3>
            </div>
        </router-link>

    </div>
</template>

<style scoped>

</style>