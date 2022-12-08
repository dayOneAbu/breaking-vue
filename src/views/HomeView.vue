<script setup>
import Card from '../components/Card.vue';
</script>

<template>
  <main class="mx-auto my-8">
    <div>
      <h1 class="my-2 px-8 text-yellow-800 text-5xl text-center capitalize font-bold">
        rick and morty API!</h1>
      <Suspense>
        <template #default>
          <Card />
        </template>
        <template #fallback>
          <h2>loading please wait....</h2>
        </template>
      </Suspense>
    </div>
  </main>
</template>
