<template>
  <section class="portfolio-masthead">
    <div class="portfolio-masthead__background">
      <img
        :src="imageSrc"
        loading="eager"
        :alt="imageAlt"
        class="portfolio-masthead__image"
      />
      <div class="portfolio-masthead__overlay"></div>
    </div>
    <div class="portfolio-masthead__content">
      <h1 class="portfolio-masthead__title">{{ title }}</h1>
      <p class="portfolio-masthead__description">{{ description }}</p>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}>();
</script>
<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;

.portfolio-masthead {
  position: relative;
  min-height: 350px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: vars.$portfolio-white-text;
  overflow: hidden;
  @include mixins.md {
    justify-content: flex-start;
    min-height: 500px;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }

  &__content {
    position: relative;
    z-index: 3;
    text-align: center;
    padding: 15px 20px;
    max-width: 1200px;
    margin: 0 auto;
    @include mixins.md {
      text-align: left;
    }
  }

  &__title {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 700;
    margin: 0 0 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  &__description {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    line-height: 1.6;
    margin: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    opacity: 0.95;
  }
}
</style>
