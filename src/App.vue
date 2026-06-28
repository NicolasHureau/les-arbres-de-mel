<script setup>
// import creations from './data/creations.json'
import DefaultLayout from './layouts/DefaultLayout.vue';
</script>

<!-- <template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">
      Les Arbres de Mél
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="creation in creations"
        :key="creation.id"
        class="card bg-base-100 shadow-xl"
      >
        <figure>
          <img :src="creation.image" :alt="creation.title" />
        </figure>

        <div class="card-body">
          <h2 class="card-title">
            {{ creation.title }}
          </h2>

          <p>{{ creation.description }}</p>

          <div class="flex justify-between items-center mt-2">
            <span class="font-bold">
              {{ creation.price }} €
            </span>

            <div>
              <span
                class="badge"
                :class="creation.available ? 'badge-success' : 'badge-error'"
              >
                {{ creation.available ? 'Disponible' : 'Vendu' }}
              </span>
            </div>
          </div>

          <div class="card-actions justify-end mt-3">
            <button
              v-if="creation.orderable"
              class="btn btn-primary btn-sm"
            >
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->

<template>
  <DefaultLayout />
</template>