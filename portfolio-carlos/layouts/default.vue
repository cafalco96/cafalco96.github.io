<template>
  <div class="portfolio-layout">
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
    
    <header class="portfolio-layout__header">
      <nav-header />
      <main-nav />
    </header>

    <main class="portfolio-layout__main">
      <NuxtPage />
    </main>
    <footer-component />
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
.portfolio-layout {
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
    justify-content: center;
    background-color: vars.$portfolio-body-bg;
  }

  &__footer {
    flex-shrink: 0;
    margin-top: auto;
  }
}
</style>
