<script setup>
import CardPeople from "./CardPeople.vue";
import { ref } from "vue";
defineProps({
  people: Array,
});
</script>

<template>
  <div class="container w-full p-3 mx-auto flex justify-center">
    <CardPeople
      v-for="person in people"
      :key="person"
      :person="person"
    ></CardPeople>
  </div>
</template>
