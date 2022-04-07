<template>
  <div class="w-full">
    <template v-if="!backgroundImage">
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
    </template>
    <template v-else>
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
    </template>
  </div>

</template>
<script>
export default {
  props: ['title', 'createdAt', 'slug', 'backgroundImage']
}
</script>
