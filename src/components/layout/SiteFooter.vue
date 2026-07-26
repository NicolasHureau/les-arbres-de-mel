<script setup>
import site from '../../data/site.json'
</script>

<template>
  <footer class="p-6 bg-base-200 mt-10">
    <div class="container mx-auto flex flex-col gap-2">

      <p class="font-bold">
        {{ site.name }}
      </p>

      <p class="text-sm opacity-70">
        {{ site.tagline }}
      </p>

      <a :href="`mailto:${site.email}`" class="link">
        Contact : {{ site.email }}
      </a>

      <a
          :href="site.boutique.url"
          target="_blank"
          class="link"
      >
        Retrouvez mes créations chez {{ site.boutique.name }}
      </a>

    </div>
  </footer>
</template>