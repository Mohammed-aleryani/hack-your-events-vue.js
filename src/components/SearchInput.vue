<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from 'vue';
import {useEventsStore} from '@/stores/useEventsStore';

const events=useEventsStore();

const handleSearchChange = (e) => {
    let searchTimeoutToken = 0;

    searchTimeoutToken = setTimeout(async () => {
      events.fetchEvents({keyword:e.target.value});
    }, 1000);}

</script>


<template>
    <div>
        <input type="text" id="search" placeholder="Search events..." class="rounded me-2" @change="handleSearchChange" />
        <button> <i><font-awesome-icon :icon="['fas', 'magnifying-glass']" style="color: #ffffff;" /></i></button>
    </div>
</template>

<style lang="">
    
</style>