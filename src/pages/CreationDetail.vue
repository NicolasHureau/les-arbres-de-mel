<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import StatusBadge from '../components/ui/StatusBadge.vue'

const route = useRoute()

const modules = import.meta.glob('../data/creations/*.json', {
  eager: true
})

const creations = Object.values(modules)
    .map(module => module.default)

const creation = computed(() =>
    creations.find(item => item.slug === route.params.slug)
)
</script>

<template>
  <section class="py-12 md:py-20">

    <div class="container mx-auto px-4">

      <!-- Création trouvée -->
      <template v-if="creation">

        <!-- Retour -->
        <RouterLink
            :to="`/#creation-${creation.slug}`"
            class="inline-flex items-center mb-8 text-earth
                 hover:text-emerald transition-colors"
        >
          ← Retour aux créations
        </RouterLink>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          <!-- Image -->
          <div
              class="aspect-[3/4] bg-sage/10 rounded-2xl
                   flex items-center justify-center overflow-hidden"
          >
            <img
                :src="creation.image"
                :alt="creation.title"
                class="w-full h-full object-contain"
            />
          </div>

          <!-- Informations -->
          <div class="flex flex-col justify-center">

            <h1 class="text-4xl md:text-5xl text-emerald">
              {{ creation.title }}
            </h1>

            <div class="mt-4">
              <StatusBadge :status="creation.status" />
            </div>

            <p class="mt-6 text-2xl font-semibold text-earth">
              {{ creation.price }} €
            </p>

            <p class="mt-6 text-lg leading-relaxed text-earth/80">
              {{ creation.description }}
            </p>

            <div class="mt-8">
              <a
                  v-if="creation.canOrder && creation.status === 'available'"
                  href="#contact"
                  class="btn bg-forest text-cream border-0
                       hover:bg-emerald"
              >
                Cette création m'intéresse
              </a>

              <p
                  v-else-if="creation.status === 'sold'"
                  class="text-earth/70 italic"
              >
                Cette création a déjà trouvé son propriétaire.
              </p>
            </div>

          </div>

        </div>

      </template>

      <!-- Création inexistante -->
      <template v-else>

        <div class="text-center py-20">

          <h1 class="text-4xl text-emerald">
            Création introuvable
          </h1>

          <p class="mt-4 text-earth/80">
            Cette création n'existe pas ou n'est plus disponible.
          </p>

          <RouterLink
              to="/#creations"
              class="btn mt-8 bg-forest text-cream border-0
                   hover:bg-emerald"
          >
            Retour aux créations
          </RouterLink>

        </div>

      </template>

    </div>

  </section>
</template>