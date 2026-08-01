<script setup>
import CreationCard from "./CreationCard.vue";
import { computed } from 'vue'

const modules = import.meta.glob('../../data/creations/*.json', {
  eager: true
})

const creations = computed(() =>
    Object.values(modules)
        .map(module => module.default)
        .sort((a, b) => a.id - b.id)
)
</script>
<template>
  <section id="creations" class="py-16 md:py-24">

    <div class="container mx-auto px-4">

      <div class="mb-10 text-center">
        <h1 class="text-4xl md:text-5xl text-emerald">
          Mes créations
        </h1>

        <p class="mt-4 max-w-2xl mx-auto text-earth/80">
          Chaque arbre est façonné à la main, avec des matières choisies
          avec soin.
        </p>
      </div>

      <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
               gap-6 md:gap-8"
      >
        <CreationCard
            v-for="creation in creations"
            :key="creation.id"
            :creation="creation"
        />
      </div>

    </div>

  </section>
</template>