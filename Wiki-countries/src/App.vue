<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="hello"></div>
  <RouterView />
</template>

<style scoped></style>
