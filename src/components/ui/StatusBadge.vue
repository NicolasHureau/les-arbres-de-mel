<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: String
})

const config = computed(() => {
  switch (props.status) {
    case 'available':
      return {
        label: 'Disponible',
        class: 'badge-success'
      }

    case 'sold':
      return {
        label: 'Vendu',
        class: 'badge-error'
      }

    default:
      return {
        label: props.status,
        class: 'badge-ghost'
      }
  }
})
</script>

<template>
  <span class="badge badge-outline" :class="config.class">
    {{ config.label }}
  </span>
</template>