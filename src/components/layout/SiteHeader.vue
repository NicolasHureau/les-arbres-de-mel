<script setup>
import { ref } from 'vue'
import site from '../../data/site.json'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header
      class="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm
           border-b border-earth/10"
  >
    <nav class="container mx-auto px-4">

      <div class="flex items-center justify-between min-h-20">

        <!-- Nom du site -->
        <a
            href="/"
            @click="closeMenu"
            class="text-2xl md:text-3xl text-emerald
                 font-semibold"
        >
          {{ site.name }}
        </a>

        <!-- Navigation desktop -->
        <div class="hidden md:flex items-center gap-8">

          <a
              href="/#artiste"
              class="text-earth hover:text-emerald
                   transition-colors"
          >
            L'artiste
          </a>

          <a
              href="/#creations"
              class="text-earth hover:text-emerald
                   transition-colors"
          >
            Créations
          </a>

          <a
              href="/#contact"
              class="text-earth hover:text-emerald
                   transition-colors"
          >
            Contact
          </a>

        </div>

        <!-- Bouton mobile -->
        <button
            type="button"
            class="md:hidden btn btn-ghost text-earth"
            :aria-expanded="menuOpen"
            aria-label="Ouvrir le menu"
            @click="menuOpen = !menuOpen"
        >
          <span class="text-2xl">
            {{ menuOpen ? '✕' : '☰' }}
          </span>
        </button>

      </div>

      <!-- Menu mobile -->
      <div
          v-if="menuOpen"
          class="md:hidden border-t border-earth/10 py-4"
      >
        <nav class="flex flex-col gap-2">

          <a
              href="/#artiste"
              class="px-4 py-3 rounded-lg
                   text-earth hover:bg-sage/30
                   transition-colors"
              @click="closeMenu"
          >
            L'artiste
          </a>

          <a
              href="/#creations"
              class="px-4 py-3 rounded-lg
                   text-earth hover:bg-sage/30
                   transition-colors"
              @click="closeMenu"
          >
            Créations
          </a>

          <a
              href="/#contact"
              class="px-4 py-3 rounded-lg
                   text-earth hover:bg-sage/30
                   transition-colors"
              @click="closeMenu"
          >
            Contact
          </a>

        </nav>
      </div>

    </nav>
  </header>
</template>