<script setup>
import CardPlanet from "./CardPlanet.vue";
import { ref, onMounted, computed } from "vue";
import Planet from "../../service/module/planet";
import Carrousel from "../carrousel/index.vue";
import Slide from "../carrousel/Slide.vue";
let planets = ref(null);
let countElm = ref(null);
let pageNumber = ref(null);
const page = ref(0);
pageNumber.value = 1;
async function loadPages(ressource, count, api) {
  let temp = [];
  for (let i = 2; i < Math.floor(count.value / 10); i++) {
    let tab = await api(i);

    temp = temp.concat(tab.data.results);
  }

  ressource.value = ressource.value.concat(temp);
}
onMounted(async () => {
  let data = await Planet.listPlanet();
  countElm.value = data?.data.count;
  planets.value = data.data.results;

  await loadPages(planets, countElm, Planet.listPlanet);
});

const showPlanets = computed(() => {
  if (page.value == 0) return planets.value?.slice(page, 10);
  return planets.value?.slice(page.value * 10 - 1, page.value * 10 + 9);
});
const nbSlide = computed(() => Math.floor(countElm.value / 10));

function getChangeSlide(slide) {
  page.value = slide;
}
function clickeOnPeople(idEntered) {
  id.value = idEntered;
  emit("increment", id.value);
}
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
        <CardPlanet
          v-for="planet in showPlanets"
          :key="planet"
          :planet="planet"
          :pageNumber="pageNumber"
          @click="
            clickeOnPeople(
              planet.url.split('/')[planet.url.split('/').length - 2]
            )
          "
        ></CardPlanet>
      </div>
    </Slide>
  </Carrousel>
</template>
