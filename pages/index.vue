<template>
  <div class="container pt-12 mx-auto">
    <div class="mb-6 text-right">
      <NuxtLink to="create" class="px-5 py-3 font-bold text-white bg-blue-400 cursor-pointer rounded-xl hover:bg-blue-600">
        + New Note
      </NuxtLink>
    </div>
    <NoteListPlain
      title="Contoh judul"
      created-at="3 months ago"
      slug="contoh-judul"
    />
    <NoteListImage
      title="Contoh judul"
      created-at="3 months ago"
      slug="contoh-judul"
      background-image="https://picsum.photos/200"
    />
  </div>
</template>
<script>
export default {
    layout: "default",
}
</script>

