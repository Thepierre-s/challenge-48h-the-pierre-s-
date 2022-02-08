<script setup>
import { ref, onMounted } from "vue";

defineProps({
  film: Object,
});
</script>

<template>
  <div v-if="film != null" class="w-72 h-[500px] m-2 shadow-md rounded-sm">
    <img
      :src="film.url_img"
      class="w-full h-2/3 border-2 border-b-yellow-400"
      alt=""
    />

    <p class="text-3xl font-bold font-gray-200">{{ film.title }}</p>
    <p class="text-2xl font-bold">{{ film.director }}</p>
    <p class="text-2xl font-bold">{{ film.release_date }}</p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>