<script setup>
import CardPeople from "./CardPeople.vue";
import { onMounted, ref } from "vue";

defineProps({
  people: Array,
});
const count = ref(0);
const emit = defineEmits(["increment"]);
const id = ref(1);

function Less() {
  count.value--;
  emit("increment", count.value);
}
function More() {
  count.value++;
  emit("increment", count.value);
}

function clickeOnPeople(idEntered) {
  id.value = idEntered;
  emit("increment", id.value);
}
let pageNumber = ref(null);

pageNumber.value = 1;
</script>

<template>
  <div
    v-if="people != null"
    class="container w-full mx-auto flex justify-center"
    id="example-1"
  >
    <button @click="Less"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
</svg>prev</button>
    <CardPeople
      v-for="person in people"
      :key="person"
      :person="person"
      :pageNumber="pageNumber"
      @click="
        clickeOnPeople(person.url.split('/')[person.url.split('/').length - 2])
      "
    ></CardPeople>
    <button @click="More"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>next</button>
  <!--   <p>{{ count }}</p>
    <p>ID du people : {{ id }}</p> -->
  </div>
</template>

