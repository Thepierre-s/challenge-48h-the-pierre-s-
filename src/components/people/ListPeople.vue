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
    class="container w-full p-3 mx-auto flex justify-center"
    id="example-1"
  >
    <button @click="Less">previous</button>
    <CardPeople
      v-for="person in people"
      :key="person"
      :person="person"
      :pageNumber="pageNumber"
      @click="
        clickeOnPeople(person.url.split('/')[person.url.split('/').length - 2])
      "
    ></CardPeople>
    <button @click="More">next</button>
    <p>{{ count }}</p>
    <p>ID du people : {{ id }}</p>
  </div>
</template>
