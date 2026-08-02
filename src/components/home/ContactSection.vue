<script setup>
import site from '../../data/site.json'
</script>

<template>
  <section
      id="contact"
      class="py-16 md:py-24 bg-sage/20"
  >
    <div class="container mx-auto px-4">

      <div class="max-w-3xl mx-auto text-center">

        <h2 class="text-4xl md:text-5xl text-emerald">
          Une création vous plaît ?
        </h2>

        <p class="mt-6 text-lg leading-relaxed text-earth/80">
          Pour une question, une commande ou une demande de personnalisation,
          n'hésitez pas à me contacter.
        </p>

        <!-- Email -->
        <a
            :href="`mailto:${site.email}`"
            class="inline-flex items-center justify-center
                 mt-8 px-6 py-3 rounded-full
                 bg-forest text-cream
                 hover:bg-emerald
                 transition-colors"
        >
          Me contacter
        </a>

        <!-- Réseaux sociaux -->
        <div
            v-if="site.socials?.instagram || site.socials?.facebook"
            class="mt-8 flex justify-center gap-6"
        >

          <a
              v-if="site.socials.instagram"
              :href="site.socials.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="text-earth hover:text-emerald transition-colors"
          >
            Instagram
          </a>

          <a
              v-if="site.socials.facebook"
              :href="site.socials.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="text-earth hover:text-emerald transition-colors"
          >
            Facebook
          </a>

        </div>

      </div>

    </div>
  </section>
</template>