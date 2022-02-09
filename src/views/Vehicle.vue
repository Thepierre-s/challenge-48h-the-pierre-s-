<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onMounted } from "vue";
import Vehicle from "../components/vehicle/CardVehicle.vue";
import vehicle from "../service/module/vehicle";
import ListVehicle from "../components/vehicle/ListVehicle.vue";
let OneVehicle = ref(null);
onMounted(async () => {
  let i = 4;

  let data = await vehicle.getVehicleById(i);
  OneVehicle.value = data.data;
});
</script>

<template>
  <router-view :id="this.$route.params.id"></router-view>

  <ListVehicle />
</template>

<style></style>
