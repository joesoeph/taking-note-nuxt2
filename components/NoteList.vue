<template>
  <div>
    <div v-if="!backgroundImage" class="flex flex-row items-center mb-4">
      <input type="checkbox" class="flex-shrink-0 block w-6 h-6 mr-4 border-gray-300 rounded-md shadow-sm cursor-pointer focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
      <NuxtLink :to="slug"  class="flex flex-row items-center justify-between flex-1 p-6 bg-white filter drop-shadow-md rounded-xl">
        <div>
          <div class="text-lg font-semibold text-gray-700">{{ title }}</div>
          <div class="text-sm font-light text-gray-600">{{ createdAt }}</div>
        </div>
        <div class="flex flex-row space-x-3">
          <NuxtLink :to="`${slug}/edit`" class="block text-blue-500 hover:text-opacity-50" title="Edit this">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" size="lg" />
          </NuxtLink>
          <button @click.prevent="$emit('delete-note', 'index', 'id')" class="block text-red-500 hover:text-opacity-50" title="Delete this">
            <font-awesome-icon icon="fa-solid fa-trash" size="lg" />
          </button>
        </div>
      </NuxtLink>
    </div>
    <div v-else class="flex flex-row items-center mb-4">
      <input type="checkbox" class="flex-shrink-0 w-6 h-6 mr-4 border-gray-300 rounded-md shadow-sm cursor-pointer focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
      <NuxtLink :to="slug" class="flex flex-row items-center justify-between flex-1 p-6 bg-local bg-white bg-center bg-no-repeat bg-cover filter drop-shadow-md rounded-xl" :style="{'backgroundImage': `url(${backgroundImage})`}">
        <div>
          <div class="text-lg font-semibold text-gray-700">{{ title }}</div>
          <div class="text-sm font-light text-gray-600">{{ createdAt }}</div>
        </div>
        <div class="flex flex-row space-x-3">
          <NuxtLink :to="`${slug}/edit`" class="block text-blue-500 hover:text-opacity-50" title="Edit this">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" size="lg" />
          </NuxtLink>
          <button @click.prevent="$emit('delete-note', 'index', 'id')" class="block text-red-500 hover:text-opacity-50" title="Delete this">
            <font-awesome-icon icon="fa-solid fa-trash" size="lg" />
          </button>
        </div>
      </NuxtLink>
    </div>
  </div>

</template>
<script>
export default {
  props: ['title', 'createdAt', 'slug', 'backgroundImage']
}
</script>
