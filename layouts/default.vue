<template>
  <span>
      <HeaderNav/>
      <div class="container px-4 mx-auto">
        <Nuxt keep-alive :keep-alive-props="{ max: 10 }"/>
      </div>
  </span>
</template>
<style>
@tailwind utilities;
body {
  @apply bg-gray-100;
}
</style>
