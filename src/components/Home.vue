<script setup>
import { ref } from 'vue'
import Header from './Header.vue'
import SlideShow from './SlideShow.vue'

defineProps({
  msg: String,
})

const count = ref(0)
const isOpenMenu = ref(false)
const openMenu = (value) => {
  isOpenMenu.value = value
}
</script>

<template>
  <section class="flex justify-center p-2.5">
    <img src="https://fakeimg.pl/750x250/eeeeee/" class="max-w-full md:inline hidden">
    <img src="https://fakeimg.pl/300x250/eeeeee/" class="max-w-full md:hidden">
  </section>
  <div class="main" :class="isOpenMenu ? 'overflow-hidden h-screen' : ''">
    <Header @openMenu="openMenu"/>
    <SlideShow/>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
