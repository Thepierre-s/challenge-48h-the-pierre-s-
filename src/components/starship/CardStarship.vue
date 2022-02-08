<script setup>
import { ref, onMounted } from "vue";

defineProps({
  starship: Object,
});
</script>

<template>
  <div v-if="starship != null" class="w-72 h-[500px] m-2 shadow-md rounded-sm">
    <img
      :src="starship.url_img"
      class="w-full h-2/3 border-2 border-b-yellow-400"
      alt=""
    />

    <p class="text-3xl font-bold font-gray-200">{{ starship.name }}</p>
    <p class="text-2xl font-bold">{{ starship.model }}</p>
    <p class="text-2xl font-bold">{{ starship.manufacturer }}</p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>