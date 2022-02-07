<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "./components/Navbar.vue";
</script>

<template>
<div class="app">
  <Navbar />
  <router-view />
</div>
</template>

<style>
@font-face {
  font-family: "Star Jedi";
  src:  url("/font/starjedi-webfont.woff2") format("woff2"),
        url("/font/starjedi-webfont.woff") format("woff"),
        url("/font/starjedi.ttf") format("ttf");
}
#app {
  font-family: "Star Jedi";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFE81F;
  letter-spacing: 3px;
  margin-top: 50px;
  font-size: medium;
}
body {
  background: url("../public/background.jpg");
  background-size: auto;
}
</style>
