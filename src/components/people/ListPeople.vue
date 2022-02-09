<script setup>
import CardPeople from "./CardPeople.vue";
import { onMounted, ref, computed } from "vue";
import Carrousel from "../carrousel/index.vue";
import Slide from "../carrousel/Slide.vue";
import People from "../../service/module/people";
const count = ref(0);
const page = ref(0);
const emit = defineEmits(["increment"]);
const id = ref(1);
let countElm = ref(null);
let people = ref([]);
async function loadPages(ressource, count, api) {
  let temp = [];
  for (let i = 2; i < Math.floor(count.value / 10); i++) {
    let tab = await api(i);

    temp = temp.concat(tab.data.results);
    console.log(temp);
  }
  console.log(ressource.value);
  ressource.value = ressource.value.concat(temp);
}
onMounted(async () => {
  let data = await People.listPeople();
  countElm.value = data?.data.count;

  people.value = data.data.results;
  await loadPages(people, countElm, People.listPeople);
});

const showPeople = computed(() => {
  if (page.value == 0) return people.value?.slice(page, 10);
  return people.value?.slice(page.value * 10 - 1, page.value * 10 + 9);
});
const nbSlide = computed(() =>
  Math.floor(countElm.value / showPeople.value?.length)
);
function Less() {
  count.value--;
  emit("increment", count.value);
}
function More() {
  count.value++;
  emit("increment", count.value);
}
function getChangeSlide(slide) {
  page.value = slide;
}
function clickeOnPeople(idEntered) {
  id.value = idEntered;
  emit("increment", id.value);
}
let pageNumber = ref(null);

pageNumber.value = 1;
</script>

<template>
  <Carrousel
    v-slot="{ currentSlide }"
    :getSlideCount="nbSlide"
    @changeSlide="getChangeSlide"
  >
    <Slide v-for="n in nbSlide" :key="n">
      <div
        class="absolute top-0 left-0 w-full max-h-full h-full flex justify-center"
        v-show="currentSlide === n - 1"
      >
        <CardPeople
          v-for="person in showPeople"
          :key="person"
          :person="person"
          :pageNumber="pageNumber"
          @click="
            clickeOnPeople(
              person.url.split('/')[person.url.split('/').length - 2]
            )
          "
        ></CardPeople>
      </div>
    </Slide>
  </Carrousel>
</template>
