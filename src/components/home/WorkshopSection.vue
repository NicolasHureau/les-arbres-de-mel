<script setup>
import site from '../../data/site.json'
</script>

<template>
  <section
      id="atelier"
      class="py-16 md:py-24 bg-sage/10"
  >
    <div class="container mx-auto px-4">

      <!-- Titre -->
      <div class="max-w-3xl mx-auto text-center mb-10">

        <h2 class="text-4xl md:text-5xl text-emerald">
          {{ site.workshop?.title || "Mon atelier" }}
        </h2>

        <div
            v-if="site.workshop?.text"
            class="mt-6 text-lg leading-relaxed
                 text-earth/80
                 prose prose-earth max-w-none"
            v-html="site.workshop.text"
        />

      </div>

      <!-- Photos -->
      <div
          v-if="site.workshop?.images?.length"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
               gap-4 md:gap-6"
      >

        <div
            v-for="(image, index) in site.workshop.images"
            :key="image + index"
            class="aspect-[4/3]
                 rounded-2xl overflow-hidden
                 bg-cream"
        >
          <img
              :src="image"
              :alt="`Atelier de Mélanie - photo ${index + 1}`"
              class="w-full h-full object-cover
                   hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>

      <!-- Pas encore de photos -->
      <p
          v-else
          class="text-center text-earth/60 italic"
      >
        Les photos de l'atelier seront bientôt disponibles.
      </p>

    </div>
  </section>
</template>