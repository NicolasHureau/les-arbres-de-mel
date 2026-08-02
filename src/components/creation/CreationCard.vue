<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import StatusBadge from '../ui/StatusBadge.vue'

const props = defineProps({
  creation: {
    type: Object,
    required: true
  }
})

const firstImage = computed(() => {
  if (props.creation.images?.length) {
    return props.creation.images[0]
  }

  return props.creation.image
})
</script>

<template>
  <RouterLink
      :id="`creation-${creation.slug}`"
      :to="`/creations/${creation.slug}`"
      class="group relative block overflow-hidden rounded-2xl
         bg-sage/10 shadow-md cursor-pointer
         transition-all duration-300
         hover:-translate-y-1 hover:shadow-xl"
  >
    <!-- Image -->
    <div class="aspect-[3/4] bg-sage/10 flex items-center justify-center">
      <img
          :src="firstImage"
          :alt="creation.title"
          class="w-full h-full object-cover transition-transform duration-500
               group-hover:scale-[1.02]"
      />
    </div>

    <!-- Bandeau -->
    <div
        class="absolute left-0 right-0 bottom-0
             bg-cream/95 backdrop-blur-sm
             border-t border-earth/10
             px-5 py-4"
    >
      <div class="flex items-center justify-between gap-4">

        <h3 class="text-2xl text-emerald">
          {{ creation.title }}
        </h3>

        <span class="font-semibold text-earth whitespace-nowrap">
          {{ creation.price }} €
        </span>

      </div>

      <div class="mt-2">
        <StatusBadge :status="creation.status" />
      </div>
    </div>
  </RouterLink>
</template>