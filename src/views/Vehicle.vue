<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onMounted } from "vue";
import Vehicle from "../components/CardVehicle.vue";
import vehicle from "../service/module/vehicle";
let OneVehicle = ref(null);
onMounted(async () => {
  let i = 4;

  let data = await vehicle.getVehicleById(i);
  console.log(data.data);
  OneVehicle.value = data.data;
  console.log(OneVehicle.value);
});
</script>

<template>
  <Vehicle :vehicle="OneVehicle" />
</template>

<style></style>
