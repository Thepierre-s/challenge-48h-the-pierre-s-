<script setup>
import { ref, inject, watch, computed, onMounted } from "vue";
const { state, setStateProp } = inject("state");
import Restart from "./Restart.vue";
import ImgBlurred from "./ImgBlurred.vue";

const loading = ref(true);

onMounted(() => {
  state.data.elements.length > 1;
  loading.value = false;
});
const category = ref(state.data.category);
if (category.value == "people") {
  category.value = "characters";
}
const datas = ref([
  {
    name: "luke",
    id: "1",
  },
  {
    name: "moi",
    id: "2",
  },
]);

// https://maximomussini.com/posts/vue-custom-elements
let message = ref();
let reponse = ref();

let badAnswer = ref(false);
let goodAnswer = ref(false);

let beginGame = ref(false);
let tourStarted = ref(false);
let tourEnded = ref(false);
let endGame = ref(false);
let urlImg = ref();

let counter = ref();
let timer = ref(10);

let round = ref(-1);

let showPicture = ref(false);

function endTourFunc() {
  clearInterval(counter.value);
  tourEnded.value = true;
  tourStarted.value = false;
  message.value = "";
  timer.value = 0;
  badAnswer.value = false;
  if (round.value + 1 == state.data.elements.length) {
    endGame.value = true;
  }
}

function startTour() {
  round.value++;

  urlImg.value =
    "./src/assets/img/" +
    category.value +
    "/" +
    state.data.elements[round.value].id +
    ".png";

  reponse.value = state.data.elements[round.value].name;
  showPicture.value = true;
  beginGame.value = true;
  tourStarted.value = true;
  tourEnded.value = false;
  goodAnswer.value = false;
  timer.value = 10;

  counter.value = setInterval(function () {
    timer.value--;
    if (timer.value == 0) {
      endTourFunc();
    }
  }, 1000);
}

function submit() {
  if (message.value.toLowerCase() == reponse.value) {
    goodAnswer.value = true;
    badAnswer.value = false;
    state.score.points++;
    endTourFunc();
  } else {
    badAnswer.value = true;
  }
}

function seeResults() {
  state.score.valid = true;
}

computed(() => {
  let root = document.querySelector(".blurred");
  root.classList.toggle("not_blurred");
});
</script>
<template>
  <Restart></Restart>

  <div>
    <div v-if="state.data.elements.length < 1">loading</div>
    <div v-else>
      <button v-if="!beginGame" @click="startTour">start</button>

      <!--ici composant resultTour-->
      <div v-if="tourEnded">
        <button v-if="!endGame" @click="startTour">next picture</button>
        <p>Réponse : {{ reponse }}</p>
        <div v-if="goodAnswer">bravo vous avez trouvé !</div>
      </div>
      <!--fin composant resultTour-->

      <!--ICI COMPOSANT GUESS-->
      <div v-if="tourStarted">
        <p>{{ timer }}</p>
        <input v-model="message" placeholder="votre réponse..." />
        <button @click="submit">submit</button>
        <p v-if="badAnswer">bad answer !</p>
      </div>
      <!--fin composanT guess-->

      <p>tour : {{ round + 1 }} / {{ state.nbQuestions }}</p>

      <button v-if="endGame" @click="seeResults">See results</button>
      <img src="" alt="" />
      <ImgBlurred v-if="showPicture" :url="urlImg" :blurred="true"></ImgBlurred>
    </div>
  </div>
</template>
