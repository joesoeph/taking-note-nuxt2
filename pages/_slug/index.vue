<template>
  <div class="container pt-12 mx-auto mb-12">
    <div class="flex flex-col bg-white rounded-b-2xl filter drop-shadow-lg">
      <div style="background-image: url(https://picsum.photos/200)" class="w-full bg-center bg-no-repeat bg-cover rounded-t-2xl h-96"></div>
      <div class="p-8">
        <h1 class="text-4xl font-semibold text-gray-600 ">Some title</h1>
        <span class="mt-3 text-sm font-light text-gray-600">1 months ago</span>
        <div class="mt-6 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non nisi quos dolor quidem eius consequatur fugiat assumenda, molestias, ipsam error praesentium explicabo ullam ipsa provident eos laboriosam id velit.</p>
        </div>
      </div>
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
