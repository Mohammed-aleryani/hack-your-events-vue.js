<script setup>


</script>

<template>
    <div class="bg-gray-900 h-20 text-white	mb-1 flex-shrink-0 shadow-md shadow-neutral-400">
        <div class="p-2  flex justify-around items-center h-full ">
            <h1 class="text-3xl font-bold">HackYourEvents</h1>


            <div class="">
                <input
                        type="text"
                        id="search"
                        placeholder="Search events..."
                        class="rounded me-2"
                />
                <button> <i><font-awesome-icon :icon="['fas', 'magnifying-glass']" style="color: #ffffff;" /></i></button>
            </div>
            
            <div class="flex-row justify-between place-content-center	">
                <RouterLink class="mx-1" to="/">Home</RouterLink>
                <RouterLink class="mx-1" to="/Favorite">Favorite</RouterLink>
                <RouterLink class="mx-1" to=#>Contactus</RouterLink>
            </div>
        </div>
        
       

    </div>
</template>

<style scoped>

</style>