<template>
  <div class="portfolio-tile">
    <a
      v-if="link"
      :href="link"
      target="_blank"
      rel="noopener"
      class="portfolio-tile__link"
    >
      <div class="portfolio-tile__image-container" v-if="image">
        <img
          :src="image"
          :alt="title || 'Tile Image'"
          class="portfolio-tile__image"
          loading="lazy"
        />
      </div>
      <div class="portfolio-tile__content">
        <h2 v-if="title" class="portfolio-tile__title">{{ title }}</h2>
        <p v-if="description" class="portfolio-tile__description">
          {{ description }}
        </p>
      </div>
    </a>
    <div v-else class="portfolio-tile__container">
      <div class="portfolio-tile__image-container" v-if="image">
        <img
          :src="image"
          :alt="title || 'Tile Image'"
          class="portfolio-tile__image"
        />
      </div>
      <div class="portfolio-tile__content">
        <h3 v-if="title" class="portfolio-tile__title">{{ title }}</h3>
        <p v-if="description" class="portfolio-tile__description">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  image?: string;
  title?: string;
  description?: string;
  link?: string;
}>();
</script>
<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;
.portfolio-tile {
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__image-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    color: vars.$portfolio-white-text;
  }

  &__title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: vars.$portfolio-white-text;
    text-shadow: 
      1px 1px 2px rgba(0, 0, 0, 0.8),
      0px 0px 4px rgba(0, 0, 0, 0.6);
    font-weight: 600;
  }

  &__description {
    font-size: 1rem;
    margin-bottom: 0;
    color: vars.$portfolio-white-text;
    opacity: 0.9;
    text-shadow: 
      1px 1px 2px rgba(0, 0, 0, 0.7),
      0px 0px 3px rgba(0, 0, 0, 0.5);
  }

  &__container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__link {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;

    &:hover {
      cursor: pointer;
      .portfolio-tile__image {
        transform: scale(1.05);
      }
    }

    &:focus {
      .portfolio-tile__image {
        transform: scale(1.05);
      }
    }
  }
}
</style>
