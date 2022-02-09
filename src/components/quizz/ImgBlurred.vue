<script setup>
import { ref, onMounted, watch, computed } from "vue";
const props = defineProps({
  url: String,
  blurred: Boolean,
});
const root = ref(null);
</script>

<template>
  <img :src="url" alt="" />
</template>

<style scoped></style>
