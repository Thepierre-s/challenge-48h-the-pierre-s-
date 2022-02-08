<script setup>
import CardSpecie from "./CardSpecie.vue";
import { ref, onMounted } from "vue";
import Specie from "../../service/module/specie";
let species = ref(null);
onMounted(async () => {
  let data = await Specie.listSpecie();
  species.value = data.results;
});
</script>

<template>
  <div class="container w-full p-3 mx-auto flex justify-center">
    <CardSpecie v-for="spec in species" :key="spec" :spec="spec"></CardSpecie>
  </div>
</template>
