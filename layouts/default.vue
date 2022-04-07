<template>
  <span>
      <LazyHeaderNav/>
      <div class="container px-4 mx-auto">
        <Nuxt/>
      </div>
  </span>
</template>
<style>
@tailwind utilities;
body {
  @apply bg-gray-100;
}
</style>
