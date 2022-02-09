<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Film from "../../service/module/film";

const props = defineProps({
  id: String,
});

let loading = ref(true);
let oneFilm = ref(null);

onMounted(async () => {
  let data = await Film.getFilmById(props.id);
  oneFilm.value = data.data;
  loading.value = false;
});

watch(async (id) => {
  loading.value = true;
  let data = await Film.getFilmById(props.id);
  oneFilm.value = data.data;
  loading.value = false;
});
const urlImg = computed(() => "../src/assets/img/films/" + props.id + ".png");
</script>

<template>
  <div v-if="loading == true">loading</div>
  <div
    v-else-if="oneFilm != null"
    id="character"
    class="container px-1 md:px-10 md:py-10 flex justify-between mx-auto"
  >
    <div class="flex flex-col justify-end">
      <h2 class="text-[30px] items-center">{{ oneFilm.title }}</h2>
      <ul class="m-2 text-[15px]">
        <li class="m-2" v-if="oneFilm.episode_id != 'n/a'">
          episode id : {{ oneFilm.episode_id }}
        </li>
        <li class="m-2" v-if="oneFilm.opening_crawl != 'n/a'">
          opening crawl : {{ oneFilm.opening_crawl }}
        </li>
        <li class="m-2" v-if="oneFilm.director != 'n/a'">
          director : {{ oneFilm.director }}
        </li>
        <li class="m-2" v-if="oneFilm.producer != 'n/a'">
          producer: {{ oneFilm.producer }}
        </li>
        <li class="m-2" v-if="oneFilm.release_date != 'n/a'">
          release date : {{ oneFilm.release_date }}
        </li>
      </ul>
    </div>
    <img class="max-h-[500px] max-w-[420px]" :src="urlImg" alt="" />
  </div>
</template>

<style scoped>
#character {
  position: relative;
}
#character::after {
  font-family: "Star Jhol";
  content: "The character";
  position: absolute;
  left: 25%;
  font-size: 6rem;
  z-index: -3;
}
</style>
