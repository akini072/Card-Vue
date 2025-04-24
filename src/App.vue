<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
<div class="flex flex-col lg:flex-row overflow-x-hidden">
  <Sidebar  />
  <div class="px-6 pt-36 lg:pl-28 lg:pt-0 mx-auto max-w-md xl:max-w-lg 2xl:max-w-xl flex items-center justify-center w-full py-6 lg:h-screen">
    <RouterView />
  </div>
</div>
</template>

<style scoped>
</style>
