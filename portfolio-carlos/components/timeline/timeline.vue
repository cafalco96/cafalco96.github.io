<template>
  <div class="portfolio-timeline">
    <div class="portfolio-timeline__container">
      <h2 v-if="title" class="portfolio-timeline__title">{{ title }}</h2>
      <div class="portfolio-timeline__track">
        <div
          v-for="(milestone, index) in reversedMilestones"
          :key="index"
          class="portfolio-timeline__item"
        >
          <div class="portfolio-timeline__marker">
            <div class="portfolio-timeline__dot"></div>
          </div>
          <div class="portfolio-timeline__content">
            <p class="portfolio-timeline__date">{{ milestone.date }}</p>
            <p class="portfolio-timeline__milestone">
              {{ milestone.milestone }}
            </p>
            <p
              v-if="milestone.description"
              class="portfolio-timeline__description"
            >
              {{ milestone.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimelineMilestone } from "~/types";

const props = defineProps<{
  title?: string;
  milestones: TimelineMilestone[];
}>();

const reversedMilestones = computed(() => {
  return [...props.milestones].reverse();
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;

.portfolio-timeline {
  width: 100%;
  padding: 2rem 0;

  &__container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  &__title {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: vars.$portfolio-white-text;
    margin: 0 0 3rem;
  }

  &__track {
    position: relative;
    padding-left: 2rem;

    &::before {
      content: "";
      position: absolute;
      left: 1rem;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(
        to bottom,
        vars.$portfolio-border,
        rgba(vars.$portfolio-border, 0.3)
      );
    }

    @include mixins.md {
      padding-left: 3rem;

      &::before {
        left: 1.5rem;
      }
    }
  }

  &__item {
    position: relative;
    margin-bottom: 2.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__marker {
    position: absolute;
    left: -2rem;
    top: 0.5rem;
    z-index: 2;

    @include mixins.md {
      left: -3rem;
    }
  }

  &__dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: vars.$portfolio-border;
    border: 3px solid vars.$portfolio-body-bg;
    box-shadow: 0 0 0 3px vars.$portfolio-border;
    transition: all 0.3s ease;

    .portfolio-timeline__item:hover & {
      transform: scale(1.2);
      box-shadow: 0 0 0 3px vars.$portfolio-border,
        0 0 20px rgba(vars.$portfolio-accent, 0.4);
    }

    @include mixins.md {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  &__content {
    background: rgba(vars.$portfolio-border, 0.1);
    border: 1px solid vars.$portfolio-border;
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(vars.$portfolio-border, 0.2);
      transform: translateX(0.25rem);
    }

    @include mixins.md {
      padding: 2rem;
    }
  }

  &__date {
    font-size: 0.875rem;
    font-weight: 600;
    color: vars.$portfolio-white-text;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
  }

  &__milestone {
    font-size: 1.25rem;
    font-weight: 700;
    color: vars.$portfolio-white-text;
    line-height: 1.3;
    margin-bottom: 0.75rem;

    @include mixins.md {
      font-size: 1.5rem;
    }
  }

  &__description {
    font-size: 0.95rem;
    color: vars.$portfolio-text-muted;
    line-height: 1.6;
    margin: 0;
  }
}
</style>
