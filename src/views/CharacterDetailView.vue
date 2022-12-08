<script setup>
import axios from 'axios';
import { onBeforeMount, onMounted, ref, Suspense } from 'vue';
import { useRoute } from 'vue-router'
const { params } = useRoute()
const id = params.id
const character = ref(null)
onBeforeMount(async () => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    character.value = res.data
})
</script>

<template>

    <div class="grid grid-cols-2 bg-gray-100 mx-auto max-w-6xl ">
        <div class="flex flex-col justify-start w-full rounded-lg  overflow-hidden">
            <img :src="character.image" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
            <div class="capitalize text-gray-600 text-lg">
                <h2>character name
                    <span class="px-6 text-gray-900  uppercase whitespace-nowrap text-sm font-medium "> {{
                            character.name
                    }} </span>
                </h2>
                <p>character status<span class="px-6 text-gray-900">{{ character.status }} </span></p>
                <p>character species <span class="px-6 text-gray-900">{{ character.species }} </span></p>
                <p>character gender<span class="px-6 text-gray-900">{{ character.gender }} </span></p>
                <p>character origin<span class="px-6 text-gray-900"> {{ character.origin.name }} </span></p>
                <p>created <span class="px-6 text-gray-900"> {{ character.created }}</span></p>

            </div>
        </div>
        <div>
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Episodes
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Link
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="(ep, idx) in character.episode" :key="ep">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {{ idx + 1 }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {{ ep }}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
