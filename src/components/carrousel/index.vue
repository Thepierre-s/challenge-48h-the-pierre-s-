<script setup>
import { ref } from "vue";

const currentSlide = ref(0);
</script>

<template>
  <div class="container w-full mt-10 p-3 mx-auto flex justify-center">
    <slot :currentSlide="currentSlide"></slot>
  </div>
</template>
