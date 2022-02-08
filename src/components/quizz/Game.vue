<script setup>
import { ref, inject, watch } from "vue";
const { state, setStateProp } = inject("state");
console.log(state.data.category);
</script>
<template>
  <p>la catégorie choisie est : {{ state.data.category }}</p>
</template>
<style>
.blurred {
  filter: blur(20px);
}
</style>
