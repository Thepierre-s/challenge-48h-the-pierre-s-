<script setup>
import CardSpecie from "./CardSpecie.vue";
import { ref, onMounted, computed } from "vue";
import Specie from "../../service/module/specie";
import Carrousel from "../carrousel/index.vue";
import Slide from "../carrousel/Slide.vue";
let species = ref(null);
onMounted(async () => {
  let data = await Specie.listSpecie();
  species.value = data.data.results;
});
const page = ref(0);

const showSpecie = computed(() => {
  if (page.value == 0) return species.value?.slice(page, 5);
  return species.value?.slice(0, 5 + page.value * 5);
});
const showSpecie1 = computed(() => {
  return species.value?.slice(5, 10);
});

const carrouselSlide = ref([1, 2, 3]);
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
    <Carrousel v-slot="{ currentSlide }">
      <Slide v-for="(slide, index) in carrouselSlide" :key="slide">
        <div
          class="absolute top-0 left-0 w-full max-h-full h-full flex"
          v-show="currentSlide === index"
        >
          <template v-if="slide == 1">
            <CardSpecie
              v-for="specie in showSpecie"
              :key="specie"
              :spec="specie"
            ></CardSpecie>
          </template>
          <template v-if="slide == 2">
            <CardSpecie
              v-for="specie in showSpecie1"
              :key="specie"
              :spec="specie"
            ></CardSpecie>
          </template>
        </div>
      </Slide>
    </Carrousel>
  </div>
</template>
