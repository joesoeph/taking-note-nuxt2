<template>
  <NuxtLink :to="slug" class="flex flex-row items-center mb-5">
    <input type="checkbox" class="flex-shrink-0 w-6 h-6 mr-4 border-gray-300 rounded-md shadow-sm cursor-pointer focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
    <div class="flex flex-row items-center justify-between flex-1 p-6 bg-local bg-white bg-center bg-no-repeat bg-cover filter drop-shadow-md rounded-xl" :style="{'backgroundImage': `url(${backgroundImage})`}">
      <div>
        <div class="text-lg font-semibold text-gray-700">{{ title }}</div>
        <div class="text-sm font-light text-gray-600">{{ createdAt }}</div>
      </div>
      <NuxtLink :to="`${slug}/edit`" class="text-blue-500 hover:text-opacity-50" title="Edit this">
        <font-awesome-icon icon="fa-solid fa-pen-to-square" size="lg" />
      </NuxtLink>
    </div>
  </NuxtLink>
</template>
<script>
export default {
  props: ['title', 'createdAt', 'slug', 'backgroundImage'],
}
</script>
