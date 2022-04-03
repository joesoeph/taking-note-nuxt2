<template>
  <div class="container pt-12 mx-auto mb-12">
    <div class="flex flex-row items-center justify-center text-gray-400 border-4 border-gray-300 border-dashed py-9">
      <p class="text-xl font-semibold">Upload Picture</p>
    </div>
    <div class="mt-6">
      <label for="title" class="block mb-2 text-gray-500">Title</label>
      <input type="text" id="title" class="w-full border-none shadow-md rounded-xl">
    </div>
    <div class="mt-6">
      <label for="notes" class="block mb-2 text-gray-500">Notes</label>
      <textarea id="notes" class="w-full border-none shadow-md rounded-xl" rows="5"></textarea>
    </div>
    <div class="mt-20">
      <button class="w-full px-5 py-3 font-bold text-white bg-blue-400 cursor-pointer rounded-xl hover:bg-blue-600">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  layout: "default",
  data() {
    return {
      slug: null
    }
  },
  created() {
    this.slug = this.$route.params.slug
  }
}
</script>
