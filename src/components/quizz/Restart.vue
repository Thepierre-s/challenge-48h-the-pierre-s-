<script setup>
import { ref, inject, watch, computed } from "vue";
const { state, setStateProp } = inject("state");
function restart() {
  state.score = { points: 0, valid: false };
  state.data = { category: String, elements: [] };
}
</script>
<template>
  <button @click="restart">recommencer une partie</button>
</template>
