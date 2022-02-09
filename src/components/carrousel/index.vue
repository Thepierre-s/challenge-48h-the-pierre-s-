<script setup>
import { ref } from "vue";

const currentSlide = ref(0);
const prop = defineProps({
  getSlideCount: Number,
});
</script>

<template>
  <div class="w-full h-96 max-h-96 bg-red-400 relative">
    <button
      @click="Less"
      class="absolute flex justify-center top-1/2 left-0 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
      prev
    </button>
    <slot :currentSlide="currentSlide"></slot>
    <button
      @click="More"
      class="absolute flex justify-center top-1/2 right-0 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        /></svg
      >next
    </button>
  </div>
</template>
