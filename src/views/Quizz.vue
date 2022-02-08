<script setup>
import HomeQuizz from "../components/quizz/HomeQuizz.vue";
import Game from "../components/quizz/Game.vue";
import { inject } from "vue";
const { state, setStateProp } = inject("state");
console.log("DATA DANS QUIZZ : ", state.data.category);
</script>

<template>
  <HomeQuizz v-if="state.data.category.length == 1"></HomeQuizz>
  <Game v-else-if="state.data.category != ''"></Game>
</template>
