<script setup>
import {useEventsStore} from '@/stores/useEventsStore';
import Event from '@/components/Event.vue';
import {onMounted} from 'vue';
const events=useEventsStore()

onMounted(()=>events.fetchEvents())
</script>

<template>
    <div class="grid grid-cols-3 gap-4  w-10/12 px-8 mb-5  m-auto" >
        <Event  v-for="event in events.events" :event="event" class=" shadow mt-8"/>
    </div>
</template>

