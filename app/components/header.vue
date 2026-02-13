<template>
  <header class="bg-black text-yellow-400 h-20 px-8 flex items-center">
    <template>
      <NuxtLink to="/" class="flex items-center gap-3">
        <img 
          src="/logo-zinella.png" 
          alt="Zinella Volley Logo" 
          class="w-10 h-10"
        />
        <span class="text-xl font-bold tracking-wide">
          ZINELLA VOLLEY
        </span>
      </NuxtLink>
    </template>

    <UNavigationMenu 
      :items="navigationItems" 
      orientation="horizontal"
      class="ml-12 text-yellow-400 mx-auto"
      :ui="{
        link: 'px-4 py-2 text-white hover:text-gray-300 font-medium'
       }"
    />

    <template>
      <button 
        class="bg-yellow-400 text-black font-bold px-6 py-1 rounded-md mx-auto"
        to="/contatti"
      >
        Iscriviti Ora
      </button>
    </template>
  </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navigationItems = computed<NavigationMenuItem[]>(() => [
  { label: 'HOME', to: '/' },
  { label: 'CHI SIAMO', to: '/about' },
  { label: 'SQUADRE', to: '/teams' },
  { label: 'ACADEMY', to: '/academy' },
  { label: 'NEWS', to: '/news' },
  { label: 'CONTATTI', to: '/contact' }
])
</script>