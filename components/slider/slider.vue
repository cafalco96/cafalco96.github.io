<template>
  <section class="portfolio-slider">
    <div class="portfolio-slider__container">
      <swiper
        :modules="modules"
        :thumbs="{ swiper: thumbsSwiper }"
        :navigation="true"
        :loop="true"
        :spaceBetween="30"
        class="portfolio-slider__main"
      >
        <swiper-slide v-for="(tile, index) in tiles" :key="index" class="portfolio-slider__slide">
          <div class="portfolio-slider__content">
            <img
              :src="tile.image"
              :alt="tile.description"
              loading="lazy"
              class="portfolio-slider__image"
            />
            <h2 class="portfolio-slider__title">{{ tile.title }}</h2>
          </div>
        </swiper-slide>
      </swiper>
      <swiper
        @swiper="setThumbsSwiper"
        :modules="modules"
        :slides-per-view="4"
        :space-between="10"
        :breakpoints="{
          640: { slidesPerView: 5, spaceBetween: 15 },
          768: { slidesPerView: 6, spaceBetween: 20 },
          1024: { slidesPerView: 8, spaceBetween: 20 }
        }"
        :watch-slides-progress="true"
        :free-mode="true"
        class="portfolio-slider__thumbs"
      >
        <swiper-slide v-for="(tile, index) in tiles" :key="`thumb-${index}`" class="portfolio-slider__thumb">
          <img
            :src="tile.image"
            :alt="tile.description"
            loading="lazy"
            class="portfolio-slider__thumb-image"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Tile } from "~/types";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const props = defineProps<{
  tiles: Tile[];
}>();

const modules = [Navigation, Thumbs, FreeMode];

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;

.portfolio-slider {
  width: 100%;
  padding: 2rem 0;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  &__main {
    margin-bottom: 1rem;
    border-radius: 12px;
    overflow: hidden;

    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      top: 45%;
      color: vars.$portfolio-white-text;
      background: rgba(vars.$portfolio-body-bg, 0.75);
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 1px solid vars.$portfolio-white-text;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
        svg {
          width: 10px;
          height: 10px;
        }
      }
      svg {
        width: 8px;
        height: 8px;
      }
    }
  }

  &__slide {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;

    @include mixins.md {
      min-height: 500px;
    }

    @include mixins.lg {
      min-height: 600px;
    }
  }

  &__content {
    text-align: center;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 100%;
    height: 400px;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    @include mixins.md {
      height: 500px;
    }

    @include mixins.lg {
      height: 600px;
      max-width: 90%;
    }
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    color: vars.$portfolio-white-text;
    margin: 1.5rem 0 0;
    text-align: center;
    line-height: 1.3;

    @include mixins.md {
      font-size: 2rem;
    }
  }

  &__thumbs {
    padding: 1rem 0;

    :deep(.swiper-slide) {
      opacity: 0.6;
      cursor: pointer;
      transition: opacity 0.3s ease;

      &.swiper-slide-thumb-active {
        opacity: 1;
        transform: scale(1.05);
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &__thumb {
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      border-color: vars.$portfolio-border;
    }
  }

  &__thumb-image {
    width: 100%;
    height: 60px;
    object-fit: cover;
    display: block;

    @include mixins.md {
      height: 80px;
    }
  }

  :deep(.swiper-lazy-preloader) {
    width: 42px;
    height: 42px;
    border: 4px solid vars.$portfolio-accent;
    border-top-color: transparent;
  }
}
</style>