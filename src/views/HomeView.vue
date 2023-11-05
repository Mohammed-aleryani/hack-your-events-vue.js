<script setup>
import {useEventsStore} from '@/stores/useEventsStore';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Events from '@/components/Events.vue';
import {onMounted} from 'vue';

const events=useEventsStore()

onMounted(()=>events.fetchEvents())
</script>

<template>
   <div class="flex flex-col justify-between h-screen">
       <Header/>
        <Events :events="events.events" class="grid grid-cols-3 gap-4  w-10/12 px-8 mb-5  m-auto"/>
       <Footer/>
   </div>
   
</template>
