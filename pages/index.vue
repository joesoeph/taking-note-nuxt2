<template>
  <div class="pt-12">
    <div class="mb-6 text-right">
      <NuxtLink to="create" class="px-5 py-3 font-bold text-white bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-400">
        + New Note
      </NuxtLink>
    </div>
    <client-only>
      <div v-if="$fetchState.pending || $fetchState.error">
        <div v-for="index in 5" :key="index" class="flex flex-row items-center mb-4">
          <div class="w-6 h-6 mr-4 bg-gray-200 animate-pulse"></div>
          <div class="flex flex-row items-center justify-between flex-1 p-6 bg-gray-200 rounded-xl">
            <div class="w-full animate-pulse">
              <div class="w-1/2 h-8 mb-2 bg-gray-300"></div>
              <div class="w-1/4 h-4 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <NoteList v-for="(item, index) in notes" :key="index" :background-image="item.image" :slug="item.id" :created-at="humanDate(item.created_at)" :title="item.title" @delete-note="remove(index, item.id)"/>
      </div>
    </client-only>
  </div>
</template>
<script>
const domain = 'https://620496a1c6d8b20017dc3598.mockapi.io'
export default {
  scrollToTop: true,
  layout: "default",
  data() {
    return {
      notes: []
    };
  },
  async fetch() {
    const response = await this.$axios.get(`${domain}/notes`)
    this.notes = response.data
  },
  methods: {
    humanDate(date) {
      return this.$hDate(date)
    },
    remove(index, id) {
      if (confirm('Are you sure?')) {
        this.$axios.delete(`${domain}/notes/${id}`)
        .then((response) => {
          if (response.status === 200) {
            this.notes.splice(index, 1)
          }
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  },
}
</script>

