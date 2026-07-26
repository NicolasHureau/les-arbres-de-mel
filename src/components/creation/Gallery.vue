<script setup>
import creations from '../../data/creations.json'
import CreationCard from "./CreationCard.vue";
import { computed } from 'vue'

const sortedCreations = computed(() => {
  return [...creations].sort((a, b) => {
    if (a.status === 'available' && b.status !== 'available') return -1
    if (a.status !== 'available' && b.status === 'available') return 1
    return 0
  })
})
</script>
<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    <CreationCard
        v-for="creation in sortedCreations"
        :key="creation.id"
        :creation="creation"
    />
  </div>
</template>