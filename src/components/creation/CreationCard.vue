<script setup>
import StatusBadge from "../ui/StatusBadge.vue";
import { computed } from 'vue'

const props = defineProps({
  creation: {
    type: Object,
    required: true
  }
})

const isOrderable = computed(() => {
  return props.creation.status === 'available' && props.creation.canOrder
})

const contactSeller = () => {
  const subject = `Commande - ${props.creation.title}`

  const body = `
Bonjour,

Je suis intéressé(e) par votre création : ${props.creation.title}

Prix : ${props.creation.price} €

Pouvez-vous me dire si elle est disponible ?

Merci
  `

  window.location.href = `mailto:ton-email@exemple.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

</script>
<template>
  <div class="card bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
    <figure class="aspect-square overflow-hidden">
      <img
          :src="props.creation.image"
          :alt="props.creation.title"
          class="w-full h-64 object-cover hover:scale-105 transition duration-500"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ props.creation.title }}
      </h2>

      <p>{{ props.creation.description }}</p>

      <StatusBadge :status="props.creation.status" />

      <div class="flex justify-between items-center mt-2">
            <span class="font-bold">
              {{ props.creation.price }} €
            </span>
      </div>
      <div class="card-actions justify-end">
        <button
            class="btn bg-forest text-white hover:bg-sage border-none"
            :disabled="!isOrderable"
            @click="contactSeller"
        >
          Commander
        </button>
      </div>
    </div>

  </div>
</template>