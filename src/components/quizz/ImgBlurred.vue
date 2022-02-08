<script setup>
import { ref, onMounted, watch, computed } from "vue";
const props = defineProps({
  url: String,
});
const root = ref(null);

onMounted(() => {
  console.log(root.value);
  setTimeout(() => {
    root.value.classList.toggle("not_blurred");
  }, 3000);
});
</script>

<template>
  <img ref="root" :src="url" alt="" />
</template>

<style>
img {
  filter: blur(15px);
  transition: all 10s ease;
}
.not_blurred {
  filter: blur(0px);
}
</style>
