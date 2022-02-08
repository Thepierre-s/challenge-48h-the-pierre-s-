<script setup>
import { ref, inject } from "vue";

const tabCategories = ref();
tabCategories.value = [
  "people",
  "films",
  "planets",
  "species",
  "starships",
  "vehicules",
];

let category = ref();
category.value = "people";
function ChooseCat(cat) {
  category.value = cat;
  console.log(category.value);
}
const { state, setStateProp } = inject("state");

function StartGame() {
  state.data.category = category.value;
}
</script>

<template>
  <h1>muizz : What is this ?</h1>
  <p>Select a category</p>
  <div class="flex justify-center">
    <div class="m-2" v-for="category in tabCategories" :key="category">
      <button @click="ChooseCat(category)">{{ category }}</button>
    </div>
  </div>
  <button @click="StartGame">Jouer</button>
</template>
