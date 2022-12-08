<script setup>
import axios from 'axios'
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
const characters = ref(null)
const page = ref(1)


const res = await axios.get('https://rickandmortyapi.com/api/character')
characters.value = res.data.results

watch(page, async () => {
    const paginated_res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page.value}`)
    characters.value = paginated_res.data.results
})
</script>
<template>
    <ul className="grid grid-cols-3 gap-x-6 lg:grid-cols-5 xl:gap-x-8">

        <li v-for="character in characters" :key="character.id" className="relative">
            <RouterLink :to="`/character/${character.id}`">
                <div
                    className="hover:scale-110 transition duration-200 group block w-full rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">

                    <img :src="character.image" alt=""
                        className="object-fill pointer-events-none group-hover:opacity-75" />
                </div>
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                    {{ character.name }}
                </p>
            </RouterLink>
        </li>
    </ul>
    <div class="mx-auto max-w-3xl  flex items-center justify-between">
        <button class="h-10  bg-blue-500 text-black rounded-lg px-8 py-2 text-center"
            @click="page > 1 && page--">back</button>
        <button class="h-10  bg-blue-500 text-black rounded-lg px-8 py-2 text-" @click="page++">next</button>

    </div>
</template>