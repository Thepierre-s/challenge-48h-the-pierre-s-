<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ref, onMounted} from 'vue'
import Specie from "../components/CardSpecie.vue";
import Spec from "../service/module/specie";
let onePerson=ref(null);
onMounted(async () => {
    let i =1;
  
let data = await Spec.getSpecieById(i);
  console.log(data.data);
  onePerson.value = data.data;
  console.log(onePerson.value); 
    
});
</script>

<template>

  <Specie 
   :spec="onePerson"
  />
  

  
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
