<template>
  <header class="flex flex-row items-center justify-between p-4 bg-white filter drop-shadow">
    <div></div>
    <div class="text-xl font-semibold text-gray-700">
      <NuxtLink to="/" class="text-gray-700 hover:text-opacity-75" title="Go to home">Taking Note</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/profile/edit" class="flex flex-row items-center" title="Go to profile">
        <img src="https://picsum.photos/200" alt="John Doe Picture" class="w-10 h-10 rounded-full">
        <span class="ml-3 text-gray-700 hover:text-opacity-75">Hi, John Doe</span>
      </NuxtLink>
    </div>
  </header>
</template>
