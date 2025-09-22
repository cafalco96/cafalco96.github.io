<template>
  <section class="portfolio-hero">
    <div class="portfolio-hero__image-container">
      <img :src="imageSrc" :alt="imageAlt" loading="eager" class="portfolio-hero__image" />
    </div>
    <div class="portfolio-hero__content">
      <p>{{ eyeBrow }}</p>
      <h1 class="portfolio-hero__content-title">
        {{ title }} - <span>{{ subtitle }}</span>
      </h1>
      <p class="portfolio-hero__content-description">
        {{ description }}
      </p>
      <small-tiles :items="techStack"/>
      <div class="portfolio-hero__button-container">
        <nuxt-link to="/works" class="btn portfolio-hero__button"
          >See My Works</nuxt-link
        >
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { TechStack } from "~/types";
import { certificates } from '../../stores/certificatesStores';

defineProps<{
  imageSrc: string;
  imageAlt: string;
  eyeBrow: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: TechStack[];
}>();
</script>
<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;
.portfolio-hero {
  color: vars.$portfolio-white-text;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  max-width: 1200px;
  margin: 0 auto;
  @include mixins.md {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
  &__image-container {
    border-radius: 50%;
    overflow: hidden;
  }
  &__image {
    width: 100%;
  }
  &__content {
    &-title {
      font-size: 1.5rem;
      margin: 0.5rem 0;
      @include mixins.md {
        font-size: 2.5rem;
      }
    }
  }
}
</style>
