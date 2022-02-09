<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onMounted } from "vue";

import ListSpecie from "../components/specie/ListSpecie.vue";

import DetailsSpecie from "../components/specie/DetailsSpecie.vue";
</script>

<template>
  <div class="container">
    <DetailsSpecie></DetailsSpecie>
    <ListSpecie />
  </div>
</template>

<style></style>
