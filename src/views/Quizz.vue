<script setup>
import HomeQuizz from "../components/quizz/HomeQuizz.vue";
import Game from "../components/quizz/Game.vue";
import { inject } from "vue";
import Results from "../components/quizz/Results.vue";
const { state, setStateProp } = inject("state");
</script>

<template>
  <HomeQuizz v-if="state.data.category.length == 1"></HomeQuizz>
  <Game v-else-if="state.data.category != '' && !state.score.valid"></Game>
  <Results v-if="state.score.valid"></Results>
</template>
