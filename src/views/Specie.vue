<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onMounted } from "vue";
import Specie from "../components/CardSpecie.vue";
import Spec from "../service/module/specie";
let OneSpecie = ref(null);
onMounted(async () => {
  let i = 1;

  let data = await Spec.getSpecieById(i);
  console.log(data.data);
  OneSpecie.value = data.data;
  console.log(OneSpecie.value);
});
</script>

<template>
  <Specie :spec="OneSpecie" />
</template>

<style></style>
