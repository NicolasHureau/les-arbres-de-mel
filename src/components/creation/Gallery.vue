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
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    <CreationCard
        v-for="creation in creations"
        :key="creation.slug"
        :creation="creation"
    />
  </div>
</template>