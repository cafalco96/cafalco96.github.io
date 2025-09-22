<template>
  <div class="portfolio-certificates">
    <h1>Certifications & Courses</h1>
    <slider :tiles="certificates" />
  </div>
</template>
<script setup lang="ts">
import { certificates } from "~/stores/certificatesStores";
</script>
<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
.portfolio-certificates {
  color: vars.$portfolio-white-text;
  text-align: center;
  padding-top: 20px;
}
</style>
