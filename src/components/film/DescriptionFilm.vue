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
    id="film"
    class="max-w-7xl sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row justify-between mx-auto"
  >
    <div class="sm:w-1/2 flex flex-col justify-end">
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
    <img class="sm:w-1/2 max-h-[500px] max-w-[420px]" :src="urlImg" alt="" />
  </div>
</template>

<style scoped>
#film {
  position: relative;
  --font-txt-bg: 5.25rem;
}
@media screen(sm) {
  #film {
    --left-position: 55%;
    --font-txt-bg: 6rem;
  }
}
@media screen(md) {
  #film {
    --left-position: 55%;
    --font-txt-bg: 7rem;
  }
}
#film::after {
  font-family: "Star Jhol";
  content: "films";
  position: absolute;
  top: var(--top-position);
  left: var(--left-position);
  font-size: var(--font-txt-bg);
  z-index: 3;
}
</style>
