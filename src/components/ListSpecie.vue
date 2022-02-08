


<script setup>
import Specie from "/src/views/CardSpecie.vue";
import { ref } from "vue";
defineProps({
  Specie: Array,
});
</script>

<template>
  <div class="container w-full p-3 mx-auto flex justify-center">
    <CardSpecie
      v-for="spec in Specie"
      :key="spec"
      :spec="spec"
    ></CardSpecie>
  </div>
</template>