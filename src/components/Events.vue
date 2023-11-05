<script setup>
import Event from '@/components/Event.vue';

defineProps({
    events:Object
})

</script>

<template>
    <div  >
        <Event  v-for="event in events" :event="event" :key="event.id" class=" shadow mt-8"/>
    </div>
</template>

