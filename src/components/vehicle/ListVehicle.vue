<script setup>
import CardVehicle from "./CardVehicle.vue";
import { ref, onMounted, computed } from "vue";
import Vehicle from "../../service/module/vehicle";
import Carrousel from "../carrousel/index.vue";
import Slide from "../carrousel/Slide.vue";
let vehicles = ref(null);
const countElm = ref(null);
const pageNumber = ref(null);
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
  let data = await Vehicle.listVehicle();
  vehicles.value = data.data.results;
  countElm.value = data?.data.count;

  await loadPages(vehicles, countElm, Vehicle.listVehicle);
});
const showVehicles = computed(() => {
  if (page.value == 0) return vehicles.value?.slice(page, 10);
  return vehicles.value?.slice(page.value * 10 - 1, page.value * 10 + 9);
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
        <CardVehicle
          v-for="vehi in showVehicles"
          :key="vehi"
          :vehicle="vehi"
          :pageNumber="pageNumber"
          @click="
            clickeOnPeople(vehi.url.split('/')[vehi.url.split('/').length - 2])
          "
        ></CardVehicle>
      </div>
    </Slide>
  </Carrousel>
</template>
