<template>
  <div class="container is-max-desktop">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from "@/components/Layout/NavBar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
