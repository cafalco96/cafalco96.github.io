<template>
  <div class="portfolio-masthead-layout">
    <!-- Google Tag Manager (noscript) -->
    <ClientOnly>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-M7F4NMS"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe>
      </noscript>
    </ClientOnly>
    <!-- End Google Tag Manager (noscript) -->
    <header class="portfolio-masthead-layout__header">
      <nav-header />
      <main-nav />
    </header>

    <main class="portfolio-masthead-layout__main">
      <NuxtPage />
    </main>
      <footer-component />
  </div>
</template>
<script setup lang="ts">
  
</script>
<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
.portfolio-masthead-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  &__header {
    flex-shrink: 0;
    position: sticky;
    top: 0;
    z-index: 100;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  &__main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: vars.$portfolio-body-bg;
  }
  
  &__footer {
    flex-shrink: 0;
    margin-top: auto;
  }
}
</style>
