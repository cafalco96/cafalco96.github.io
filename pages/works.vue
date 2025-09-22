<template>
  <div class="postfolio-works">
    <h1>My Works</h1>
    <p>Here are some of my projects and works.</p>
    <tile-grid :tiles="works" />
  </div>
</template>
<script setup lang="ts">
import { works } from "~/stores/worksStores";
</script>
<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
.postfolio-works {
  color: vars.$portfolio-white-text;
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
