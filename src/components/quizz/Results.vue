<script setup>
import { ref, inject, watch, computed } from "vue";
import Restart from "./Restart.vue";
const { state, setStateProp } = inject("state");
</script>
<template>
  <p>Mon Score : {{ state.score.points }} / {{ state.nbQuestions }}</p>
  <!-- <button @click="submitScore">Ajouter mon score</button>
  <input v-model="registerScore" placeholder="votre pseudo" /> -->
  <Restart></Restart>
</template>
