<script setup>
import Home from './components/Home.vue'
import Rasp from './components/Rasp.vue'

import { ref } from "vue"



const mode = ref("События")
</script>

<template>
  <button @click="mode = 'События'">События</button>
  <button @click="mode = 'Расписание'">Расписание</button>
  <button @click="mode = 'Оценки'">Оценки</button>


  <Home v-if="mode == 'События'"></Home>
  <Rasp v-if="mode == 'Расписание'"></Rasp>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
