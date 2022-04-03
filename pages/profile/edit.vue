<template>
  <div class="container pt-12 mx-auto mb-12">
    <div class="flex flex-col items-center">
      <img src="https://picsum.photos/200" alt="https://picsum.photos/200" class="block w-40 h-40 rounded-full cursor-pointer" title="Click image to change">
      <span class="block text-xs font-light text-gray-500">Click image to change</span>
    </div>
    <div class="mt-6">
      <label for="name" class="block mb-2 text-gray-500">Name</label>
      <input type="text" id="name" class="w-full border-none shadow-md rounded-xl">
    </div>
    <div class="mt-6">
      <label for="birthday" class="block mb-2 text-gray-500">Birthday</label>
      <input type="date" id="birthday" class="w-full border-none shadow-md rounded-xl">
    </div>
    <div class="mt-6">
      <label for="gender" class="block mb-2 text-gray-500">Gender</label>
      <select id="gender" class="w-full border-none shadow-md rounded-xl">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="mt-6">
      <label for="email" class="block mb-2 text-gray-500">Email</label>
      <input type="email" id="email" class="w-full border-none shadow-md rounded-xl">
    </div>
    <div class="mt-20">
      <button class="w-full px-5 py-3 font-bold text-white bg-blue-400 cursor-pointer rounded-xl hover:bg-blue-600">Save</button>
    </div>
  </div>
</template>
