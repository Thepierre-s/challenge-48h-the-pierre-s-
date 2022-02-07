<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import People from "./service/module/people";

let peoples = ref([]);
onMounted(async () => {
  peoples.value = await People.listPeople(3);
  console.log(peoples.value.data);
});
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
