<script setup>
import CardPeople from "./CardPeople.vue";
import { onMounted, ref } from "vue";

defineProps({
  people: Array,
});
// const count = ref(0);
// const emit = defineEmits(["increment"]);

// function Less() {
//   count.value--;
//   emit("increment", count.value);
// }
// function More() {
//   count.value++;
//   emit("increment", count.value);
// }
let pageNumber = ref(null);

pageNumber.value = 1;
</script>

<template>
  <div
    v-if="people != null"
    class="container w-full p-3 mx-auto flex justify-center"
    id="example-1"
  >
    <button>previous</button>
    <CardPeople
      v-for="person in people"
      :key="person"
      :person="person"
      :pageNumber="pageNumber"
    ></CardPeople>
    <button>next</button>
  </div>
</template>
