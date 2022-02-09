<script setup>
import { ref } from "vue";

const currentSlide = ref(0);
</script>

<template>
  <div class="w-full h-96 max-h-96 bg-red-400 relative">
    <slot :currentSlide="currentSlide"></slot>
  </div>
</template>
