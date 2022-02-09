<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onMounted } from "vue";

import ListFilm from "../components/film/ListFilm.vue";
</script>

<template>
  <router-view :id="this.$route.params.id"></router-view>

  <ListFilm />
</template>

<style></style>
