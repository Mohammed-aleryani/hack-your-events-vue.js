<script setup>
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import {useEventsStore} from '@/stores/useEventsStore';
import EventDetails from '../components/EventDetails.vue';
const events=useEventsStore()
const route=useRoute()
const id=route.params.id;
events.fetchEvents({id:id})
console.log(events.events.length);
console.log(events.events);


</script>

<template >
    <div class="flex flex-col justify-between h-screen">
        <Header/>
        <div v-if="events.events.length==1" class="w-full h-full ">
            <EventDetails   :event="events.events[0]"  />

        </div>
        <Footer/>
    </div>
        
</template>


<style >
    
</style>