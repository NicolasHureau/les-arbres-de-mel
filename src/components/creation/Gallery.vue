<script setup>
import CreationCard from "./CreationCard.vue";
import { computed, ref } from 'vue'

const modules = import.meta.glob('../../data/creations/*.json', {
  eager: true
})

const creations = computed(() =>
    Object.values(modules)
        .map(module => module.default)
        .sort((a, b) => a.id - b.id)
)

const selectedCategory = ref('all')

const categories = computed(() => {
  const values = creations.value
      .map(creation => creation.category)
      .filter(Boolean)

  return [...new Set(values)]
})

const filteredCreations = computed(() => {
  if (selectedCategory.value === 'all') {
    return creations.value
  }

  return creations.value.filter(
      creation => creation.category === selectedCategory.value
  )
})

function categoryLabel(category) {
  const labels = {
    arbres: 'Arbres',
    bijoux: 'Bijoux',
    jardins: 'Jardins',
    autres: 'Autres'
  }

  return labels[category] ?? category
}
</script>

<template>
  <section id="creations" class="py-16 md:py-24">

    <div class="container mx-auto px-4">

      <!-- Titre -->
      <div class="mb-8 text-center">

        <h2 class="text-4xl md:text-5xl text-emerald">
          Mes créations
        </h2>

        <p class="mt-4 max-w-2xl mx-auto text-earth/80">
          Chaque création est façonnée à la main, avec des matières choisies
          avec soin.
        </p>

      </div>

      <!-- Filtres -->
      <div
          class="flex gap-3 overflow-x-auto
                 pb-4 mb-10
                 justify-start md:justify-center
                 scrollbar-none"
      >

        <!-- Toutes -->
        <button
            type="button"
            class="shrink-0 px-5 py-2 rounded-full
                   border transition-colors"
            :class="
              selectedCategory === 'all'
                ? 'bg-forest text-cream border-forest'
                : 'bg-transparent text-earth border-earth/30 hover:border-emerald hover:text-emerald'
            "
            @click="selectedCategory = 'all'"
        >
          Toutes
        </button>

        <!-- Catégories -->
        <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="shrink-0 px-5 py-2 rounded-full
                   border transition-colors"
            :class="
              selectedCategory === category
                ? 'bg-forest text-cream border-forest'
                : 'bg-transparent text-earth border-earth/30 hover:border-emerald hover:text-emerald'
            "
            @click="selectedCategory = category"
        >
          {{ categoryLabel(category) }}
        </button>

      </div>

      <!-- Créations -->
      <div
          v-if="filteredCreations.length"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                 gap-6 md:gap-8"
      >

        <CreationCard
            v-for="creation in filteredCreations"
            :key="creation.id"
            :creation="creation"
        />

      </div>

      <!-- Aucune création -->
      <div
          v-else
          class="text-center py-12 text-earth/70"
      >
        Aucune création dans cette catégorie pour le moment.
      </div>

    </div>

  </section>
</template>