<script setup>
import CardSpecie from "./CardSpecie.vue";
import { ref, onMounted, computed } from "vue";
import Specie from "../../service/module/specie";
import Carrousel from "../carrousel/index.vue";
import Slide from "../carrousel/Slide.vue";
let species = ref(null);
let count = ref(null);
onMounted(async () => {
  let data = await Specie.listSpecie();
  count.value = data?.data.count;
  species.value = data.data.results;
  let tab1 = await Specie.listSpecie(2);
  let tab2 = await Specie.listSpecie(2);
  species.value = species.value.concat(tab1.data.results, tab2.data.results);
});
const page = ref(0);

const showSpecie = computed(() => {
  if (page.value == 0) return species.value?.slice(page, 10);
  return species.value?.slice(page.value * 10 - 1, page.value * 10 + 10);
});
const nbSlide = computed(() =>
  Math.floor(count.value / 10)
);

const showSpecie1 = computed(() => {
  return species.value?.slice(5, 10);
});

const carrouselSlide = ref([1, 2, 3]);
function getChangeSlide(slide) {
  page.value = slide;
}
</script>

<template>
  <!-- <div class="container w-full p-3 mx-auto flex justify-center">
    <button @click="changeSlide(-1)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      prev
    </button>

    <CardSpecie
      v-for="specie in showSpecie"
      :key="specie"
      :spec="specie"
    ></CardSpecie>
    <button @click="changeSlide(1)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
      next
    </button>
  </div> -->

  <div>
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
          <CardSpecie
            v-for="specie in showSpecie"
            :key="specie"
            :spec="specie"
          ></CardSpecie>
        </div>
      </Slide>
    </Carrousel>
  </div>
</template>
