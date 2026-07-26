<script setup>
import SiteHeader from "../components/layout/SiteHeader.vue";
import SiteFooter from "../components/layout/SiteFooter.vue";
</script>
<template>
  <div>
    <SiteHeader />

    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>

    <SiteFooter />
  </div>
</template>te>