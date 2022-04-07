<template>
  <div class="container pt-12 mx-auto mb-12">
    <client-only>
      <div v-if="$fetchState.pending || $fetchState.error">Loading...</div>
      <div v-else class="flex flex-col bg-white rounded-b-2xl filter drop-shadow-lg">
        <div v-lazy:background-image="srcUrl" class="w-full bg-center bg-no-repeat bg-cover rounded-t-2xl h-96"></div>

        <div class="p-8">
          <h1 class="text-4xl font-semibold text-gray-600 ">{{ note.title }}</h1>
          <span class="mt-3 text-sm font-light text-gray-600">{{ humanDate(note.created_at) }}</span>
          <div class="mt-6 text-gray-600">
            {{ note.note }}
          </div>
        </div>
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
      slug: null,
      note: null
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
    humanDate(date) {
      return this.$hDate(date)
    }
  },
  computed: {
    srcUrl() {
      return this.note.image
    },
    placeholderUrl() {
      return '/icon.png'
    },
  }
}
</script>
