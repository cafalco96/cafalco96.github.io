<template>
  <div class="portfolio-tile-grid">
    <tile
      class="portfolio-tile-grid__tile"
      v-for="(tile, index) in tiles"
      :key="index"
      :title="tile.title"
      :description="tile.description"
      :image="tile.image"
      :link="tile.link"
    />
  </div>
</template>
<script setup lang="ts">
import type { Tile } from "~/types";
defineProps<{
  tiles: Tile[];
}>();
</script>
<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;
.portfolio-tile-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;

  @include mixins.md {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mixins.lg {
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
  }
  
  &__tile {
    width: 100%;
    aspect-ratio: 4/3; 
    min-height: 250px; 
    
    @include mixins.md {
      min-height: 280px; 
    }

    @include mixins.lg {
      min-height: 320px; 
    }
  }
}
</style>
