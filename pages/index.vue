<template>
  <div class="pt-12 px-36">
    <div class="mb-6 flex flex-row justify-between items-end">
      <p class="ml-10 text-gray-500">Selected ({{selected.length}}) to delete</p>
      <NuxtLink
        v-if="selected.length <= 0"
        to="create"
        class="px-5 py-3 font-bold text-white bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-400"
      >
        + New Note
      </NuxtLink>
      <div v-else>
        <button
          @click="deleteBulk()"
          type="button"
          class="px-5 py-3 font-bold text-white bg-red-600 cursor-pointer rounded-xl hover:bg-red-400"
        >
          <font-awesome-icon icon="fa-solid fa-trash" size="lg"/>
          Delete
        </button>
        <button
          @click="clear()"
          type="button"
          class="px-5 py-3 font-bold text-white bg-gray-600 cursor-pointer rounded-xl hover:bg-gray-400"
        >
          <font-awesome-icon icon="fa-solid fa-xmark" size="lg"/>
          Clear
        </button>
      </div>
    </div>
    <client-only>
      <template v-if="$fetchState.pending || $fetchState.error">
        <div
          v-for="index in 5"
          :key="index"
          class="flex flex-row items-center mb-4"
        >
          <div class="w-6 h-6 mr-4 bg-gray-200 animate-pulse"></div>
          <div class="flex flex-row items-center justify-between flex-1 p-6 bg-gray-200 rounded-xl">
            <div class="w-full animate-pulse">
              <div class="w-1/2 h-8 mb-2 bg-gray-300"></div>
              <div class="w-1/4 h-4 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="flex flex-row items-center mb-4"
          v-for="(item, index) in notes"
          :key="index"
        >
          <input
            type="checkbox"
            class="flex-shrink-0 block w-6 h-6 mr-4 border-gray-300 rounded-md shadow-sm cursor-pointer focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            v-model="selected"
            :value="item.id"
          >
          <NoteList
            :slug="item.id"
            :created-at="humanDate(item.created_at)"
            :title="item.title"
            @delete-note="remove(index, item.id)"
          />
        </div>
      </template>
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
      notes: [],
      selected: [],
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
    },
    clear() {
      this.selected = []
    },
    deleteBulk() {
      let promises = []
      let ask = confirm("Are you sure you want to delete these notes?")

      if (ask) {
        for (let i = 0; i < this.selected.length; i++) {
          const response = this.$axios.delete(`${domain}/notes/${this.selected[i]}`)
          promises.push(response)
        }
        const results = Promise.all(promises)

        results.then((response) => {
          for (let i = 0; i < this.selected.length; i++) {
            let filteredArray = this.notes.filter(value => value.id !== this.selected[i]);
            this.notes = filteredArray
          }
          this.selected = []
        }).catch((error) => {
          console.log(error)
        })
      }
    },
  },
}
</script>

