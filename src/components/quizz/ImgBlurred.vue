<script setup>
import { ref, onMounted, watch, computed } from "vue";
const props = defineProps({
  url: String,
  blurred: Boolean,
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
}
.not_blurred {
  filter: blur(0px);
  transition: all 14s ease;
}
</style>
