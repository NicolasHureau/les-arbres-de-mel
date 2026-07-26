<script setup>
import site from '../../data/site.json'
</script>

<template>
  <section class="px-4 py-12 md:px-8 lg:px-16">
    <h2 class="text-2xl font-bold mb-4">
      À propos
    </h2>

    <p class="opacity-80 leading-relaxed">
      {{ site.description }}
    </p>
  </section>
</template>