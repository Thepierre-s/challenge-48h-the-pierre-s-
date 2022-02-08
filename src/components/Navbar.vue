<template>
  <div class="m-8">
    <router-link to="/" class="wrap-image text-xl m-10">home</router-link>
    <router-link to="/people" class="wrap-image text-xl m-10">people</router-link>
    <router-link to="/starships" class="wrap-image text-xl m-10">starship</router-link>
    <router-link to="/vehicle" class="wrap-image text-xl m-10">vehicles</router-link>
    <router-link to="/species" class="wrap-image text-xl m-10">species</router-link>
    <router-link to="/planets" class="wrap-image text-xl m-10">planets</router-link>
    <router-link to="/films" class="wrap-image text-xl m-10">films</router-link>
    <router-link to="/quizz" class="wrap-image text-xl m-10">quizz</router-link>
  </div>
</template>

<style scoped>
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}

.wrap-image {
  position: relative;
  padding: 1px 8px;
}
.wrap-image::before, .wrap-image::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  border: 2px solid blue;
  transition: all 0.25s ease-out;
}
.wrap-image::before {
  background-color: #FF0000;
  top: -1px;
  left: -1px;
  opacity: 35%;
}
.wrap-image::after {
  bottom: -1px;
  right: -1px;
}
.wrap-image:hover::before {
  top: 5px;
  left: 5px;
}
.wrap-image:hover::after {
  bottom: 5px;
  right: 5px;
}
</style>