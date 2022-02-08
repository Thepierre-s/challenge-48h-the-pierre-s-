<script setup>
import CardPeople from "./CardPeople.vue";
import { onMounted, ref } from "vue";

defineProps({
  people: Array,
});

let pageNumber = ref(null);

pageNumber.value = 1;
</script>

<template>
  <div
    v-if="people != null"
    class="container w-full p-3 mx-auto flex justify-center"
    id="example-1"
  >
    <button v-on:click="counter -= 1">previous</button>
    <CardPeople
      v-for="person in people"
      :key="person"
      :person="person"
      :pageNumber="pageNumber"
    ></CardPeople>
    <button v-on:click="counter += 1">next</button>
    <p>{{ counter }}</p>
  </div>
</template>
