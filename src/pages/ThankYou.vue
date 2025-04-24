<script setup>
import {  useRouter } from 'vue-router'
import Button from '@/components/Button.vue'

const router = useRouter()

function continueToHome() {
  router.push('/')
}
</script>

<template>
  <main class="w-full max-w-lg flex items-center justify-center flex-col mt-10 lg:mt-0">
    <img src="/icon-complete.svg" class="mb-8" alt="">
    <h1 class="text-3xl tracking-widest font-normal text-center uppercase text-dark-orchid">Thank You!</h1>
    <p class="text-new-violet-300 my-4 text-center">We've added your card details</p>
    <Button class="mt-6" @click="continueToHome()" title="Continue" />
  </main>
</template>
