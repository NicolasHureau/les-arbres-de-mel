<script setup>
import site from '../../data/site.json'
</script>

<template>
  <footer class="mt-16 border-t border-earth/10 bg-sage/20">
    <div
        class="container mx-auto px-4 py-10 flex flex-col gap-6"
    >

      <!-- Identité -->
      <div>
        <p class="text-xl font-semibold text-emerald">
          {{ site.name }}
        </p>

        <p class="mt-1 text-sm opacity-80">
          {{ site.tagline }}
        </p>
      </div>

      <!-- Contact -->
      <div>
        <a
            :href="`mailto:${site.email}`"
            class="text-earth hover:text-emerald transition-colors"
        >
          {{ site.email }}
        </a>
      </div>

      <!-- Partenaires -->
      <div
          v-if="site.partners?.length"
          class="flex flex-col gap-2"
      >
        <p class="font-semibold text-emerald">
          Retrouvez mes créations
        </p>

        <div
            v-for="partner in site.partners"
            :key="partner.name"
        >
          <a
              v-if="partner.url"
              :href="partner.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-earth hover:text-emerald transition-colors"
          >
            {{ partner.name }}
          </a>

          <span v-else>
            {{ partner.name }}
          </span>
        </div>
      </div>

      <!-- Localisation -->
      <p class="text-sm opacity-70">
        {{ site.location }}
      </p>

    </div>
  </footer>
</template>