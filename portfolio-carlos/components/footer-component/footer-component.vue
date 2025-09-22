<template>
  <footer class="portfolio-footer">
    <div class="portfolio-footer__container">
      <nav class="portfolio-footer__nav">
        <div class="portfolio-footer__nav-section">
          <p class="portfolio-footer__nav-title">Portfolio</p>
          <ul class="portfolio-footer__nav-list">
            <li>
              <NuxtLink to="/" class="portfolio-footer__nav-link"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/about" class="portfolio-footer__nav-link"
                >About</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/certificates" class="portfolio-footer__nav-link"
                >Certificates</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/works" class="portfolio-footer__nav-link"
                >Works</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div class="portfolio-footer__nav-section">
          <p class="portfolio-footer__nav-title">Connect</p>
          <ul class="portfolio-footer__nav-list">
            <li>
              <a
                href="https://github.com/cafalco96"
                class="portfolio-footer__nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="portfolio-footer__nav-icon"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/carlos-falconi-lucas-3539a4209/"
                class="portfolio-footer__nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="portfolio-footer__nav-icon"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  />
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/carlosAlfFalco"
                class="portfolio-footer__nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="portfolio-footer__nav-icon"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05L9.294 6.928zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977.538.775 4.491 6.47h-1.843L7.651 8.852z"
                  />
                </svg>
                X
              </a>
            </li>
            <li>
              <a
                href="mailto:carlossfalco96@gmail.com"
                class="portfolio-footer__nav-link"
              >
                <svg
                  class="portfolio-footer__nav-icon"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104A2 2 0 002 14h12a2 2 0 002-2V4.697l-6.931 4.815a2 2 0 01-2.138 0L0 4.697z"
                  />
                </svg>
                Email
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="portfolio-footer__nav-section--technologies">
        <p class="portfolio-footer__nav-title">Technologies</p>

        <div class="portfolio-footer__tech-chart">
          <div class="portfolio-footer__tech-bar">
            <div
              v-for="tech in normalizedTechnologies"
              :key="tech.name"
              class="portfolio-footer__tech-segment"
              :style="{
                width: `${tech.normalizedPercentage}%`,
                backgroundColor: tech.color,
              }"
              :title="`${tech.name}: ${tech.percentage}%`"
            ></div>
          </div>
        </div>
        <ul
          class="portfolio-footer__nav-list portfolio-footer__nav-list--technologies"
        >
          <li
            v-for="tech in technologies"
            :key="tech.name"
            class="portfolio-footer__tech-item"
          >
            <span
              class="portfolio-footer__tech-dot"
              :style="{ backgroundColor: tech.color }"
            ></span>
            <span
              class="portfolio-footer__nav-link portfolio-footer__nav-link--inactive"
            >
              {{ tech.name }}
            </span>
            <span class="portfolio-footer__tech-percentage"
              >{{ tech.percentage }}%</span
            >
          </li>
        </ul>
      </div>
      <div class="portfolio-footer__bottom">
        <div class="portfolio-footer__copyright">
          <span>&copy; {{ currentYear }} Carlos Falconi</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const technologies = ref([
  { name: "HTML", percentage: 100, color: "#e34f26" },
  { name: "JavaScript", percentage: 95, color: "#f7df1e" },
  { name: "CSS", percentage: 100, color: "#1572b6" },
  { name: "Java", percentage: 70, color: "#ed8b00" },
  { name: "Wordpress", percentage: 70, color: "#21759b" },
  { name: "TypeScript", percentage: 70, color: "#3178c6" },
  { name: "PHP", percentage: 80, color: "#777bb4" },
]);

const totalPercentage = computed(() =>
  technologies.value.reduce((sum, tech) => sum + tech.percentage, 0)
);

const normalizedTechnologies = computed(() =>
  technologies.value.map((tech) => ({
    ...tech,
    normalizedPercentage: (tech.percentage / totalPercentage.value) * 100,
  }))
);
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;

.portfolio-footer {
  background-color: vars.$portfolio-bg;
  border-top: 1px solid vars.$portfolio-text-muted;
  padding: 32px 0 16px;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 16px;
  }

  &__brand {
    flex: 1;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    color: vars.$portfolio-white-text;
    margin: 0 0 4px;
    line-height: 1.25;
  }

  &__subtitle {
    font-size: 16px;
    color: vars.$portfolio-text-muted;
    margin: 0;
    line-height: 1.5;
  }

  &__stats {
    display: flex;
    gap: 32px;
    justify-content: center;

    @include mixins.md {
      justify-content: flex-start;
    }
  }

  &__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__stat-number {
    font-size: 24px;
    font-weight: 700;
    color: vars.$portfolio-white-text;
    line-height: 1;
    margin-bottom: 4px;
  }

  &__stat-label {
    font-size: 12px;
    font-weight: 500;
    color: vars.$portfolio-text-muted;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @include mixins.md {
      flex-direction: row;
    }
    &-title {
      font-size: 14px;
      font-weight: 600;
      color: vars.$portfolio-white-text;
      margin: 0 0 7px;
      line-height: 1.25;
    }
    &-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 15px;
      justify-content: center;
      &--technologies {
        flex-direction: column;
        gap: 6px;
        background-color: transparent;
        width: 100%;

        @include mixins.md {
          gap: 8px;
          flex-direction: row;
          justify-content: center;
        }

        @include mixins.lg {
          gap: 10px;
        }
      }
    }
    &-link {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
      color: #8c9196; // Color más claro para mejor contraste
      text-decoration: none;
      font-size: 14px;
      line-height: 1.5;
      transition: color 0.15s ease-in-out;

      &:hover:not(&--inactive) {
        color: vars.$portfolio-border;
      }
      &:focus, &:active {
        color: vars.$portfolio-border;
      }

      &--inactive {
        cursor: default;
        color: #a6adb5; // Color más claro para elementos inactivos

        &:hover {
          color: #a6adb5;
        }
      }
    }
    &-icon {
      flex-shrink: 0;
      fill: currentColor;
      opacity: 0.75;
      transition: opacity 0.15s ease-in-out;

      .portfolio-footer__nav-link:hover & {
        opacity: 1;
      }
    }
    &-section--technologies {
      padding: 25px 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__tech-chart {
    margin: 12px 0 16px 0;
    width: 100%;

    @include mixins.md {
      max-width: 650px;
    }

    @include mixins.lg {
      max-width: 800px;
    }
  }

  &__tech-bar {
    display: flex;
    height: 8px;
    background-color: vars.$portfolio-bg;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid vars.$portfolio-border;
  }

  &__tech-segment {
    height: 100%;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  &__tech-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__tech-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  &__tech-percentage {
    font-size: 12px;
    color: #8c9196; // Color más claro para mejor contraste
    margin-left: auto;
    font-weight: 500;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    border-top: 1px solid vars.$portfolio-border;
    flex-direction: column;
    gap: 16px;
    text-align: center;

    @include mixins.md {
      flex-direction: row;
      gap: 0;
      text-align: left;
    }
  }

  &__copyright {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #8c9196; // Color más claro para mejor contraste
    flex-wrap: wrap;
    justify-content: center;

    @include mixins.md {
      justify-content: flex-start;
    }
  }

  &__separator {
    color: vars.$portfolio-border;
    font-weight: bold;
  }

  &__version {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
  }

  &__version-label {
    color: #8c9196; // Color más claro para mejor contraste
  }

  &__version-number {
    background-color: vars.$portfolio-accent;
    color: vars.$portfolio-white-text;
    padding: 2px 8px;
    border-radius: vars.$portfolio-border-radius;
    font-weight: 500;
    font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas,
      "Courier New", monospace;
  }
}
</style>
