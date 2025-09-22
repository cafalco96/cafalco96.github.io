<template>
  <ul v-if="items.length" class="portfolio-small-tiles">
    <li
      class="portfolio-small-tiles__item"
      v-for="(value, i) in items"
      :key="i"
    >
      <div v-html="value.icon" class="portfolio-small-tiles__tech-icon" />
      {{ value.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TechStack } from "~/types";

defineProps<{
  items: TechStack[];
}>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;

.portfolio-small-tiles {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;

  @include mixins.md {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mixins.lg {
    grid-template-columns: repeat(3, 1fr);
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    background-color: rgba(vars.$portfolio-border, 0.1);
    border: 1px solid vars.$portfolio-border;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    color: vars.$portfolio-white-text;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(vars.$portfolio-border, 0.2);
      transform: translateY(-1px);
    }
  }

  &__tech-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;

    :deep(svg) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
