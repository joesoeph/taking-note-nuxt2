<template>
  <div class="container px-48 pt-12 mx-auto mb-12">
    <form @submit.prevent="update()">
      <!-- <div class="flex flex-row items-center justify-center text-gray-400 border-4 border-gray-300 border-dashed py-9">
        <p class="text-xl font-semibold">Upload Picture</p>
      </div> -->
      <div class="mt-6">
        <label for="image" class="block mb-2 text-gray-500">Image URL</label>
        <input type="text" id="image" class="w-full border-none shadow-md rounded-xl" v-model="note.image">
      </div>
      <div class="mt-6">
        <label for="title" class="block mb-2 text-gray-500">*Title</label>
        <input type="text" id="title" class="w-full border-none shadow-md rounded-xl" required v-model="note.title">
      </div>
      <div class="mt-6">
        <label for="notes" class="block mb-2 text-gray-500">*Notes</label>
        <textarea id="notes" class="w-full border-none shadow-md rounded-xl" rows="5" required v-model="note.note"></textarea>
      </div>
      <div class="mt-20">
        <button type="submit" v-if="!loading" class="w-full px-5 py-3 font-bold text-white bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-400" >Save</button>

        <button v-else class="w-full px-5 py-3 font-bold text-white bg-blue-400 cursor-not-allowed rounded-xl" disabled>
          <font-awesome-icon class="mr-3 animate-spin" icon="fa-solid fa-spinner" size="lg" />
          Processing...
        </button>
      </div>
    </form>
  </div>
</template>
<script>
const domain = 'https://620496a1c6d8b20017dc3598.mockapi.io'
export default {
  data() {
    return {
      note: {
        image: null,
        title: null,
        note: null,
      },
      slug: null,
      loading: false
    }
  },
  created() {
    this.slug = this.$route.params.slug
  },
  async fetch() {
    const response = await this.$axios.get(`${domain}/notes/${this.slug}`)
    this.note = response.data
  },
  methods: {
    update() {
      this.loading = true
      const payload = {
        image: this.note.image,
        title: this.note.title,
        note: this.note.note,
      }
      this.$axios.put(`${domain}/notes/${this.slug}`, payload)
      .then((response) => {
        if (response.status === 200) {
          alert('Successfully updated note')
          this.$router.push('/')
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
