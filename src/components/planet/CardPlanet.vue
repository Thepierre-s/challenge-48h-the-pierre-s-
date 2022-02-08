<script setup>
import { ref, onMounted } from "vue";

defineProps({
  planet: Object,
});
</script>

<template>
  <div v-if="planet != null" class="w-72 h-[500px] m-2 shadow-md rounded-sm">
    <img
      :src="planet.url_img"
      class="w-full h-2/3 border-2 border-b-yellow-400"
      alt=""
    />

    <p class="text-3xl font-bold font-gray-200">{{ planet.name }}</p>
    <p class="text-2xl font-bold">{{ planet.classification }}</p>
    <p class="text-2xl font-bold">{{ planet.designation }}</p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
