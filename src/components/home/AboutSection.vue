<script setup>
import site from '../../data/site.json'
</script>

<template>
  <section id="artiste" class="px-4 py-12 md:px-8 lg:px-16">
    <h2 class="text-5xl md:text-6xl text-emerald">
      À propos
    </h2>

    <p class="opacity-80 leading-relaxed">
      {{ site.description }}
    </p>
  </section>
</template>