<template>
  <nav class="portfolio-nav">
    <div class="portfolio-nav__container">
      <div class="portfolio-nav__home">
        <NuxtLink
          class="portfolio-nav__link portfolio-nav__link--home"
          to="/"
          active-class="portfolio-nav__link--active"
        >
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="portfolio-nav__icon"
          >
            <path
              d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
            ></path>
          </svg>
          <span class="portfolio-nav__text">Home</span>
        </NuxtLink>
      </div>
      <button
        class="portfolio-nav__toggle"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="portfolio-nav__dot"></span>
        <span class="portfolio-nav__dot"></span>
        <span class="portfolio-nav__dot"></span>
      </button>
      <ul
        class="portfolio-nav__list"
        :class="{ 'portfolio-nav__list--open': isMenuOpen }"
      >
        <li class="portfolio-nav__item portfolio-nav__item--desktop-home">
          <NuxtLink
            class="portfolio-nav__link"
            to="/"
            active-class="portfolio-nav__link--active"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="portfolio-nav__icon"
            >
              <path
                d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
              ></path>
            </svg>
            <span class="portfolio-nav__text">Home</span>
          </NuxtLink>
        </li>
        <li class="portfolio-nav__item">
          <NuxtLink
            class="portfolio-nav__link"
            to="/about"
            active-class="portfolio-nav__link--active"
            @click="isMenuOpen = false"
          >
            <svg
              class="portfolio-nav__icon"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
            >
              <path
                d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"
              ></path>
            </svg>
            <span class="portfolio-nav__text">About</span>
          </NuxtLink>
        </li>
        <li class="portfolio-nav__item">
          <NuxtLink
            class="portfolio-nav__link"
            to="/certificates"
            active-class="portfolio-nav__link--active"
            @click="isMenuOpen = false"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="portfolio-nav__icon"
            >
              <path
                d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"
              ></path>
            </svg>
            <span class="portfolio-nav__text">Certificates</span>
            <span class="portfolio-nav__counter">{{ certificates.length }}</span>
          </NuxtLink>
        </li>
        <li class="portfolio-nav__item">
          <NuxtLink
            class="portfolio-nav__link"
            to="/works"
            active-class="portfolio-nav__link--active"
            @click="isMenuOpen = false"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="portfolio-nav__icon"
            >
              <path
                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"
              ></path>
            </svg>
            <span class="portfolio-nav__text">Works</span>
            <span class="portfolio-nav__counter">{{ works.length }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { certificates } from "~/stores/certificatesStores";
import { works } from "~/stores/worksStores";

const isMenuOpen = ref(false);
</script>

<style lang="scss">
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;

.portfolio-nav {
  background-color: vars.$portfolio-bg;
  border-bottom: 1px solid vars.$portfolio-text-muted;
  padding: 0;
  position: relative;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 16px;
    position: relative;

    @include mixins.md {
      justify-content: center;
    }
  }

  &__dot {
    display: block;
    width: 2px;
    height: 2px;
    background-color: vars.$portfolio-white-text;
    border-radius: 50%;
  }

  &__home {
    display: flex;

    @include mixins.md {
      display: none;
    }
  }

  &__toggle {
    background-color: #212830;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: vars.$portfolio-border-radius;
    transition: background-color 0.3s ease;

    @include mixins.md {
      display: none;
    }

    &:hover {
      background-color: vars.$portfolio-hover-bg;
    }
  }

  &__list {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: vars.$portfolio-bg;
    list-style: none;
    margin: 0;
    padding: 5px;
    flex-direction: column;
    z-index: 1000;

    @include mixins.md {
      display: flex;
      position: static;
      flex-direction: row;
      align-items: center;
      background: transparent;
      border: none;
      gap: 10px;
    }

    &--open {
      display: flex;
    }
  }

  &__item {
    margin: 0;

    &--desktop-home {
      display: none;

      @include mixins.md {
        display: block;
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    color: vars.$portfolio-white-text;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    transition: all 0.15s ease-in-out;

    @include mixins.lg {
      font-size: 15px;
    }

    &:hover {
      background-color: vars.$portfolio-hover-bg;
      .portfolio-nav__counter {
        background-color: vars.$portfolio-accent-emphasis;
        color: vars.$portfolio-white-text;
      }

      @include mixins.md {
        border-bottom: 2px solid vars.$portfolio-border;
      }
    }
    &:focus {
      background-color: vars.$portfolio-hover-bg;
      .portfolio-nav__counter {
        background-color: vars.$portfolio-accent-emphasis;
        color: vars.$portfolio-white-text;
      }
      @include mixins.md {
        border-bottom: 2px solid vars.$portfolio-border;
      }
    }

    &--active {
      font-weight: 600;

      @include mixins.md {
        border-bottom: 2px solid vars.$portfolio-border;
        position: relative;
      }
    }

    &--home {
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom-color: vars.$portfolio-border;
      }

      &.portfolio-nav__link--active {
        border-bottom-color: vars.$portfolio-border;
      }
    }
  }

  &__text {
    display: inline;
  }

  &__icon {
    flex-shrink: 0;
    fill: currentColor;
    width: 16px;
    height: 16px;
    opacity: 0.75;
    transition: opacity 0.15s ease-in-out;

    .portfolio-nav__link:hover & {
      opacity: 1;
    }

    .portfolio-nav__link--active & {
      opacity: 1;
    }
  }

  &__counter {
    background-color: vars.$portfolio-white-text;
    color: #000000;
    font-size: 11px;
    font-weight: 500;
    line-height: 1;
    padding: 2px 6px;
    border-radius: 10px;
    min-width: 20px;
    text-align: center;
    margin-left: auto;

    @include mixins.lg {
      margin-left: 4px;
    }
  }
}
</style>
