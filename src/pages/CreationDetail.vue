<script setup>
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import StatusBadge from '../components/ui/StatusBadge.vue'
import site from '../data/site.json'

const route = useRoute()

const modules = import.meta.glob('../data/creations/*.json', {
  eager: true
})

const creations = Object.values(modules)
    .map(module => module.default)

const creation = computed(() =>
    creations.find(item => item.slug === route.params.slug)
)

/*
 * Compatible avec :
 * - les anciennes créations qui possèdent seulement "image"
 * - les nouvelles créations qui possèdent "images"
 */
const images = computed(() => {
  if (!creation.value) {
    return []
  }

  if (creation.value.images?.length) {
    return creation.value.images
  }

  return creation.value.image
      ? [creation.value.image]
      : []
})

const currentImage = ref(0)

function nextImage() {
  if (images.value.length === 0) {
    return
  }

  currentImage.value =
      (currentImage.value + 1) % images.value.length
}

function previousImage() {
  if (images.value.length === 0) {
    return
  }

  currentImage.value =
      (currentImage.value - 1 + images.value.length) % images.value.length
}

function selectImage(index) {
  currentImage.value = index
}

const contactUrl = computed(() => {
  if (!creation.value) {
    return '#contact'
  }

  const subject = encodeURIComponent(
      `Demande concernant « ${creation.value.title} »`
  )

  const body = encodeURIComponent(
      `Bonjour Mélanie,\n\n` +
      `Je suis intéressé(e) par votre création « ${creation.value.title} ».\n\n` +
      `Merci.`
  )

  return `mailto:${site.email}?subject=${subject}&body=${body}`
})
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

          <!-- ========================= -->
          <!-- CARROUSEL -->
          <!-- ========================= -->

          <div>

            <!-- Image principale -->
            <div
                class="relative aspect-[3/4]
                     bg-sage/10 rounded-2xl
                     overflow-hidden"
            >

              <img
                  v-if="images.length"
                  :src="images[currentImage]"
                  :alt="`${creation.title} - photo ${currentImage + 1}`"
                  class="w-full h-full object-contain"
              />

              <!-- Flèche précédente -->
              <button
                  v-if="images.length > 1"
                  type="button"
                  aria-label="Photo précédente"
                  class="absolute left-3 top-1/2 -translate-y-1/2
                       btn btn-circle
                       bg-cream/90 border-0
                       text-earth
                       hover:bg-cream"
                  @click="previousImage"
              >
                ‹
              </button>

              <!-- Flèche suivante -->
              <button
                  v-if="images.length > 1"
                  type="button"
                  aria-label="Photo suivante"
                  class="absolute right-3 top-1/2 -translate-y-1/2
                       btn btn-circle
                       bg-cream/90 border-0
                       text-earth
                       hover:bg-cream"
                  @click="nextImage"
              >
                ›
              </button>

              <!-- Compteur -->
              <div
                  v-if="images.length > 1"
                  class="absolute bottom-3 left-1/2
                       -translate-x-1/2
                       px-3 py-1 rounded-full
                       bg-cream/90 text-earth text-sm"
              >
                {{ currentImage + 1 }} / {{ images.length }}
              </div>

            </div>

            <!-- Miniatures -->
            <div
                v-if="images.length > 1"
                class="mt-4 flex gap-3 overflow-x-auto pb-2"
            >

              <button
                  v-for="(image, index) in images"
                  :key="image + index"
                  type="button"
                  class="shrink-0 w-20 h-24 rounded-lg
                       overflow-hidden border-2
                       transition-opacity"
                  :class="
                  index === currentImage
                    ? 'border-emerald'
                    : 'border-transparent opacity-70 hover:opacity-100'
                "
                  :aria-label="`Afficher la photo ${index + 1}`"
                  @click="selectImage(index)"
              >
                <img
                    :src="image"
                    :alt="`${creation.title} - miniature ${index + 1}`"
                    class="w-full h-full object-cover"
                />
              </button>

            </div>

          </div>

          <!-- ========================= -->
          <!-- INFORMATIONS -->
          <!-- ========================= -->

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

            <!-- Contact -->
            <div class="mt-8">

              <a
                  v-if="
                  creation.canOrder &&
                  creation.status === 'available'
                "
                  :href="contactUrl"
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

      <!-- ========================= -->
      <!-- CRÉATION INTROUVABLE -->
      <!-- ========================= -->

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