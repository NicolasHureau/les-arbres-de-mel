<script setup>
import site from '../../data/site.json'
</script>

<template>
  <section
      id="artiste"
      class="py-16 md:py-24"
  >
    <div class="container mx-auto px-4">

      <div
          class="grid grid-cols-1 md:grid-cols-2
               gap-10 md:gap-16
               items-center"
      >

        <!-- Photo -->
        <div
            v-if="site.about?.photo"
            class="order-1 md:order-1"
        >
          <div
              class="aspect-[4/5]
                   rounded-2xl overflow-hidden
                   bg-sage/10"
          >
            <img
                :src="site.about.photo"
                :alt="site.about.title || 'Mélanie'"
                class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Texte -->
        <div
            :class="[
            site.about?.photo
              ? 'order-2 md:order-2'
              : 'order-1 md:col-span-2'
          ]"
        >

          <h2 class="text-4xl md:text-5xl text-emerald">
            {{ site.about?.title || "L'artiste" }}
          </h2>

          <div
              v-if="site.about?.text"
              class="mt-6 text-lg leading-relaxed
                   text-earth/80
                   prose prose-earth max-w-none"
              v-html="site.about.text"
          />

          <p
              v-else
              class="mt-6 text-earth/60 italic"
          >
            La présentation de Mélanie sera bientôt disponible.
          </p>

        </div>

      </div>

    </div>
  </section>
</template>